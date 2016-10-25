#!/bin/sh

for file in *.wav;
do
  sox $file ${file%.wav}.mp3
done
