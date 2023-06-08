package api

import (
	"github.com/1340691923/ElasticView/model"
	"github.com/1340691923/ElasticView/pkg/engine/db"
	"github.com/1340691923/ElasticView/pkg/escache"
	"github.com/1340691923/ElasticView/pkg/response"
	"github.com/1340691923/ElasticView/pkg/util"
	es2 "github.com/1340691923/ElasticView/service/es"
	. "github.com/gofiber/fiber/v2"
)

type SearchController struct {
	BaseController
}

type GetIndexConfigsReq struct {
	EsConnectID int  `json:"es_connect"`
	Limit       int  `json:"limit"`
	Page        int  `json:"page"`
	All         bool `json:"all"`
}

type SetIndexConfigReq struct {
	EsConnectID int    `json:"es_connect"`
	IndexName   string `json:"indexName"`
	Remark      string `json:"remark"`
}

func (this SearchController) SetIndexConfig(ctx *Ctx) error {

	req := SetIndexConfigReq{}
	err := ctx.BodyParser(&req)
	if err != nil {
		return this.Error(ctx, err)
	}
	m := model.SearchConfig{}

	//REPLACE INTO `visits` (ip, VALUE) VALUES ($ip, 0);

	_, err = db.Sqlx.Exec("REPLACE into "+m.TableName()+" (index_name, remark, es_connect) values   (?,?,?)",
		req.IndexName, req.Remark, req.EsConnectID)

	if err != nil {
		return this.Error(ctx, err)
	}

	return this.Success(ctx, response.OperateSuccess, nil)
}

func (this SearchController) GetIndexConfigs(ctx *Ctx) error {

	req := GetIndexConfigsReq{}
	err := ctx.BodyParser(&req)
	if err != nil {
		return this.Error(ctx, err)
	}
	m := model.SearchConfig{}
	m.EsConnect = req.EsConnectID

	if req.All {
		list, err := m.All()
		if err != nil {
			return this.Error(ctx, err)
		}
		return this.Success(ctx, response.SearchSuccess, util.Map{"list": list})
	}

	m.Limit = req.Limit
	m.Page = req.Page

	list, err := m.List()
	if err != nil {
		return this.Error(ctx, err)
	}
	count, err := m.Count()
	if err != nil {
		return this.Error(ctx, err)
	}
	return this.Success(ctx, response.SearchSuccess, util.Map{"list": list, "count": count})
}

func (this SearchController) SearchLog(ctx *Ctx) error {

	esIndexInfo := new(escache.SearchlogReq)
	err := ctx.BodyParser(&esIndexInfo)
	if err != nil {
		return this.Error(ctx, err)
	}
	esConnect, err := escache.GetEsClientByID(esIndexInfo.EsConnect)
	if err != nil {
		return this.Error(ctx, err)
	}

	esService, err := es2.NewEsService(esConnect)
	if err != nil {
		return this.Error(ctx, err)
	}
	return esService.SearchLog(ctx, esIndexInfo)
}