#!/bin/bash
declare -i CONT=0

if [ $# == 0 ]
then
	echo "No arguments supplied"
else
	for i in $@
	do
		CONT=$CONT+1
		mkdir "ex$i"
	done
fi
