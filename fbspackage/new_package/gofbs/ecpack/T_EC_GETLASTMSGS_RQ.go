// automatically generated by the FlatBuffers compiler, do not modify

package ecpack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_EC_GETLASTMSGS_RQ struct {
	_tab flatbuffers.Table
}

func GetRootAsT_EC_GETLASTMSGS_RQ(buf []byte, offset flatbuffers.UOffsetT) *T_EC_GETLASTMSGS_RQ {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_EC_GETLASTMSGS_RQ{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_EC_GETLASTMSGS_RQ) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_EC_GETLASTMSGS_RQ) SRqHead(obj *S_RQ_HEAD) *S_RQ_HEAD {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		x := o + rcv._tab.Pos
		if obj == nil {
			obj = new(S_RQ_HEAD)
		}
		obj.Init(rcv._tab.Bytes, x)
		return obj
	}
	return nil
}

func (rcv *T_EC_GETLASTMSGS_RQ) BId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_EC_GETLASTMSGS_RQ) MutateBId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(6, n)
}

func (rcv *T_EC_GETLASTMSGS_RQ) Offset() int32 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.GetInt32(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_EC_GETLASTMSGS_RQ) MutateOffset(n int32) bool {
	return rcv._tab.MutateInt32Slot(8, n)
}

func (rcv *T_EC_GETLASTMSGS_RQ) MaxCnt() int32 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		return rcv._tab.GetInt32(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_EC_GETLASTMSGS_RQ) MutateMaxCnt(n int32) bool {
	return rcv._tab.MutateInt32Slot(10, n)
}

func T_EC_GETLASTMSGS_RQStart(builder *flatbuffers.Builder) {
	builder.StartObject(4)
}
func T_EC_GETLASTMSGS_RQAddSRqHead(builder *flatbuffers.Builder, sRqHead flatbuffers.UOffsetT) {
	builder.PrependStructSlot(0, flatbuffers.UOffsetT(sRqHead), 0)
}
func T_EC_GETLASTMSGS_RQAddBId(builder *flatbuffers.Builder, bId uint64) {
	builder.PrependUint64Slot(1, bId, 0)
}
func T_EC_GETLASTMSGS_RQAddOffset(builder *flatbuffers.Builder, offset int32) {
	builder.PrependInt32Slot(2, offset, 0)
}
func T_EC_GETLASTMSGS_RQAddMaxCnt(builder *flatbuffers.Builder, maxCnt int32) {
	builder.PrependInt32Slot(3, maxCnt, 0)
}
func T_EC_GETLASTMSGS_RQEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
