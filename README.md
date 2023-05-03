# Welcome to gRPC Protocol!

gRPC Protocol library

## Go plugins for the protocol compiler

Install the protocol compiler plugins for Go using the following commands:

> $ go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28

> $ go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2

## Generate protobuf file

example:

> protoc 	--go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative ./ping/v1/ping.proto


**note**:  don't forget to setup PATH  Add these 2 important lines to your  `~/.bash_profile:`

> export GO_PATH=~/go
> export PATH=\$PATH:/\$GO_PATH/bin

Then you need to start a new shell session or just type in this line:

> source  ~/.bash_profile

