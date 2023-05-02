// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package pricing

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

// PricingClient is the client API for Pricing service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PricingClient interface {
	InitializePerWeek(ctx context.Context, in *PricingInitializePerWeekPayLoad, opts ...grpc.CallOption) (*PricingInitializePerWeekResponse, error)
}

type pricingClient struct {
	cc grpc.ClientConnInterface
}

func NewPricingClient(cc grpc.ClientConnInterface) PricingClient {
	return &pricingClient{cc}
}

func (c *pricingClient) InitializePerWeek(ctx context.Context, in *PricingInitializePerWeekPayLoad, opts ...grpc.CallOption) (*PricingInitializePerWeekResponse, error) {
	out := new(PricingInitializePerWeekResponse)
	err := c.cc.Invoke(ctx, "/samantra.services.local_trade.pricing.Pricing/InitializePerWeek", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// PricingServer is the server API for Pricing service.
// All implementations must embed UnimplementedPricingServer
// for forward compatibility
type PricingServer interface {
	InitializePerWeek(context.Context, *PricingInitializePerWeekPayLoad) (*PricingInitializePerWeekResponse, error)
	mustEmbedUnimplementedPricingServer()
}

// UnimplementedPricingServer must be embedded to have forward compatible implementations.
type UnimplementedPricingServer struct {
}

func (UnimplementedPricingServer) InitializePerWeek(context.Context, *PricingInitializePerWeekPayLoad) (*PricingInitializePerWeekResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method InitializePerWeek not implemented")
}
func (UnimplementedPricingServer) mustEmbedUnimplementedPricingServer() {}

// UnsafePricingServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PricingServer will
// result in compilation errors.
type UnsafePricingServer interface {
	mustEmbedUnimplementedPricingServer()
}

func RegisterPricingServer(s grpc.ServiceRegistrar, srv PricingServer) {
	s.RegisterService(&Pricing_ServiceDesc, srv)
}

func _Pricing_InitializePerWeek_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PricingInitializePerWeekPayLoad)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PricingServer).InitializePerWeek(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/samantra.services.local_trade.pricing.Pricing/InitializePerWeek",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PricingServer).InitializePerWeek(ctx, req.(*PricingInitializePerWeekPayLoad))
	}
	return interceptor(ctx, in, info, handler)
}

// Pricing_ServiceDesc is the grpc.ServiceDesc for Pricing service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Pricing_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "samantra.services.local_trade.pricing.Pricing",
	HandlerType: (*PricingServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "InitializePerWeek",
			Handler:    _Pricing_InitializePerWeek_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "samantra/services/local_trade_services/pricing_service/pricing_service.proto",
}
