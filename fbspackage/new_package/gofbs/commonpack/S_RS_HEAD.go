// automatically generated by the FlatBuffers compiler, do not modify

package commonpack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type S_RS_HEAD struct {
	_tab flatbuffers.Struct
}

func (rcv *S_RS_HEAD) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *S_RS_HEAD) UserId() uint64 {
	return rcv._tab.GetUint64(rcv._tab.Pos + flatbuffers.UOffsetT(0))
}
func (rcv *S_RS_HEAD) MutateUserId(n uint64) bool {
	return rcv._tab.MutateUint64(rcv._tab.Pos+flatbuffers.UOffsetT(0), n)
}

func (rcv *S_RS_HEAD) PackSessionId() int32 {
	return rcv._tab.GetInt32(rcv._tab.Pos + flatbuffers.UOffsetT(8))
}
func (rcv *S_RS_HEAD) MutatePackSessionId(n int32) bool {
	return rcv._tab.MutateInt32(rcv._tab.Pos+flatbuffers.UOffsetT(8), n)
}

func (rcv *S_RS_HEAD) Result() int32 {
	return rcv._tab.GetInt32(rcv._tab.Pos + flatbuffers.UOffsetT(12))
}
func (rcv *S_RS_HEAD) MutateResult(n int32) bool {
	return rcv._tab.MutateInt32(rcv._tab.Pos+flatbuffers.UOffsetT(12), n)
}

func (rcv *S_RS_HEAD) Platform() int8 {
	return rcv._tab.GetInt8(rcv._tab.Pos + flatbuffers.UOffsetT(16))
}
func (rcv *S_RS_HEAD) MutatePlatform(n int8) bool {
	return rcv._tab.MutateInt8(rcv._tab.Pos+flatbuffers.UOffsetT(16), n)
}

func CreateS_RS_HEAD(builder *flatbuffers.Builder, userId uint64, packSessionId int32, result int32, platform int8) flatbuffers.UOffsetT {
	builder.Prep(8, 24)
	builder.Pad(7)
	builder.PrependInt8(platform)
	builder.PrependInt32(result)
	builder.PrependInt32(packSessionId)
	builder.PrependUint64(userId)
	return builder.Offset()
}
