//+build mage

package main

import (
	// mage:import
	"github.com/1340691923/ElasticView/pkg/build"
)

func init()  {
	build.Version = "1.8.9"
}

// Default configures the default target.
var Default = build.BuildAll