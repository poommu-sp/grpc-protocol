// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.21.9
// source: samantra/services/phantha_service/phantha.proto

package phantha

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// PhanthaClient is the client API for Phantha service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PhanthaClient interface {
	ListPhantha(ctx context.Context, in *ListPhanthaPayload, opts ...grpc.CallOption) (*ListPhanthaResponse, error)
}

type phanthaClient struct {
	cc grpc.ClientConnInterface
}

func NewPhanthaClient(cc grpc.ClientConnInterface) PhanthaClient {
	return &phanthaClient{cc}
}

func (c *phanthaClient) ListPhantha(ctx context.Context, in *ListPhanthaPayload, opts ...grpc.CallOption) (*ListPhanthaResponse, error) {
	out := new(ListPhanthaResponse)
	err := c.cc.Invoke(ctx, "/samantra.services.phantha.Phantha/ListPhantha", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// PhanthaServer is the server API for Phantha service.
// All implementations must embed UnimplementedPhanthaServer
// for forward compatibility
type PhanthaServer interface {
	ListPhantha(context.Context, *ListPhanthaPayload) (*ListPhanthaResponse, error)
	mustEmbedUnimplementedPhanthaServer()
}

// UnimplementedPhanthaServer must be embedded to have forward compatible implementations.
type UnimplementedPhanthaServer struct {
}

func (UnimplementedPhanthaServer) ListPhantha(context.Context, *ListPhanthaPayload) (*ListPhanthaResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListPhantha not implemented")
}
func (UnimplementedPhanthaServer) mustEmbedUnimplementedPhanthaServer() {}

// UnsafePhanthaServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PhanthaServer will
// result in compilation errors.
type UnsafePhanthaServer interface {
	mustEmbedUnimplementedPhanthaServer()
}

func RegisterPhanthaServer(s grpc.ServiceRegistrar, srv PhanthaServer) {
	s.RegisterService(&Phantha_ServiceDesc, srv)
}

func _Phantha_ListPhantha_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListPhanthaPayload)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PhanthaServer).ListPhantha(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/samantra.services.phantha.Phantha/ListPhantha",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PhanthaServer).ListPhantha(ctx, req.(*ListPhanthaPayload))
	}
	return interceptor(ctx, in, info, handler)
}

// Phantha_ServiceDesc is the grpc.ServiceDesc for Phantha service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Phantha_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "samantra.services.phantha.Phantha",
	HandlerType: (*PhanthaServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListPhantha",
			Handler:    _Phantha_ListPhantha_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "samantra/services/phantha_service/phantha.proto",
}
