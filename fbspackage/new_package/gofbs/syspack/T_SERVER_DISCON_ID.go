// automatically generated by the FlatBuffers compiler, do not modify

package syspack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_SERVER_DISCON_ID struct {
	_tab flatbuffers.Table
}

func GetRootAsT_SERVER_DISCON_ID(buf []byte, offset flatbuffers.UOffsetT) *T_SERVER_DISCON_ID {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_SERVER_DISCON_ID{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_SERVER_DISCON_ID) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_SERVER_DISCON_ID) Result() int32 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.GetInt32(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_SERVER_DISCON_ID) MutateResult(n int32) bool {
	return rcv._tab.MutateInt32Slot(4, n)
}

func T_SERVER_DISCON_IDStart(builder *flatbuffers.Builder) {
	builder.StartObject(1)
}
func T_SERVER_DISCON_IDAddResult(builder *flatbuffers.Builder, result int32) {
	builder.PrependInt32Slot(0, result, 0)
}
func T_SERVER_DISCON_IDEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}