{ pkgs ? import <nixpkgs> {} }:
  pkgs.mkShell {
    nativeBuildInputs = [ 
        pkgs.buildPackages.cloc 
        pkgs.buildPackages.gradle 
        pkgs.buildPackages.nodejs-14_x
        pkgs.buildPackages.yarn
    ];
}