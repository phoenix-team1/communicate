// automatically generated by the FlatBuffers compiler, do not modify

package ecpack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_EC_ISUSERBUSY_RS struct {
	_tab flatbuffers.Table
}

func GetRootAsT_EC_ISUSERBUSY_RS(buf []byte, offset flatbuffers.UOffsetT) *T_EC_ISUSERBUSY_RS {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_EC_ISUSERBUSY_RS{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_EC_ISUSERBUSY_RS) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_EC_ISUSERBUSY_RS) SRsHead(obj *S_RS_HEAD) *S_RS_HEAD {
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

func (rcv *T_EC_ISUSERBUSY_RS) BId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_EC_ISUSERBUSY_RS) MutateBId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(6, n)
}

func (rcv *T_EC_ISUSERBUSY_RS) CId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_EC_ISUSERBUSY_RS) MutateCId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(8, n)
}

func (rcv *T_EC_ISUSERBUSY_RS) Status() int32 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		return rcv._tab.GetInt32(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_EC_ISUSERBUSY_RS) MutateStatus(n int32) bool {
	return rcv._tab.MutateInt32Slot(10, n)
}

func T_EC_ISUSERBUSY_RSStart(builder *flatbuffers.Builder) {
	builder.StartObject(4)
}
func T_EC_ISUSERBUSY_RSAddSRsHead(builder *flatbuffers.Builder, sRsHead flatbuffers.UOffsetT) {
	builder.PrependStructSlot(0, flatbuffers.UOffsetT(sRsHead), 0)
}
func T_EC_ISUSERBUSY_RSAddBId(builder *flatbuffers.Builder, bId uint64) {
	builder.PrependUint64Slot(1, bId, 0)
}
func T_EC_ISUSERBUSY_RSAddCId(builder *flatbuffers.Builder, cId uint64) {
	builder.PrependUint64Slot(2, cId, 0)
}
func T_EC_ISUSERBUSY_RSAddStatus(builder *flatbuffers.Builder, status int32) {
	builder.PrependInt32Slot(3, status, 0)
}
func T_EC_ISUSERBUSY_RSEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
