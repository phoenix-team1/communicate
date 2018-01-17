// automatically generated by the FlatBuffers compiler, do not modify

package syspack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_TIME_SYNC_RS struct {
	_tab flatbuffers.Table
}

func GetRootAsT_TIME_SYNC_RS(buf []byte, offset flatbuffers.UOffsetT) *T_TIME_SYNC_RS {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_TIME_SYNC_RS{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_TIME_SYNC_RS) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_TIME_SYNC_RS) SRsHead(obj *S_RS_HEAD) *S_RS_HEAD {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		x := o + rcv._tab.Pos
		if obj == nil {
			obj = new(S_RS_HEAD)
		}
		obj.Init(rcv._tab.Bytes, x)
		return obj
	}
	return nil
}

func (rcv *T_TIME_SYNC_RS) ServerTime() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_TIME_SYNC_RS) MutateServerTime(n uint64) bool {
	return rcv._tab.MutateUint64Slot(6, n)
}

func T_TIME_SYNC_RSStart(builder *flatbuffers.Builder) {
	builder.StartObject(2)
}
func T_TIME_SYNC_RSAddSRsHead(builder *flatbuffers.Builder, sRsHead flatbuffers.UOffsetT) {
	builder.PrependStructSlot(0, flatbuffers.UOffsetT(sRsHead), 0)
}
func T_TIME_SYNC_RSAddServerTime(builder *flatbuffers.Builder, serverTime uint64) {
	builder.PrependUint64Slot(1, serverTime, 0)
}
func T_TIME_SYNC_RSEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
