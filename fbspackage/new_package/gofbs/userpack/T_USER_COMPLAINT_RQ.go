// automatically generated by the FlatBuffers compiler, do not modify

package userpack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_USER_COMPLAINT_RQ struct {
	_tab flatbuffers.Table
}

func GetRootAsT_USER_COMPLAINT_RQ(buf []byte, offset flatbuffers.UOffsetT) *T_USER_COMPLAINT_RQ {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_USER_COMPLAINT_RQ{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_USER_COMPLAINT_RQ) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_USER_COMPLAINT_RQ) SRqHead(obj *S_RQ_HEAD) *S_RQ_HEAD {
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

func (rcv *T_USER_COMPLAINT_RQ) UserId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_USER_COMPLAINT_RQ) MutateUserId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(6, n)
}

func (rcv *T_USER_COMPLAINT_RQ) Type() int8 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.GetInt8(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_USER_COMPLAINT_RQ) MutateType(n int8) bool {
	return rcv._tab.MutateInt8Slot(8, n)
}

func (rcv *T_USER_COMPLAINT_RQ) Reason() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func T_USER_COMPLAINT_RQStart(builder *flatbuffers.Builder) {
	builder.StartObject(4)
}
func T_USER_COMPLAINT_RQAddSRqHead(builder *flatbuffers.Builder, sRqHead flatbuffers.UOffsetT) {
	builder.PrependStructSlot(0, flatbuffers.UOffsetT(sRqHead), 0)
}
func T_USER_COMPLAINT_RQAddUserId(builder *flatbuffers.Builder, userId uint64) {
	builder.PrependUint64Slot(1, userId, 0)
}
func T_USER_COMPLAINT_RQAddType(builder *flatbuffers.Builder, type int8) {
	builder.PrependInt8Slot(2, type, 0)
}
func T_USER_COMPLAINT_RQAddReason(builder *flatbuffers.Builder, reason flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(3, flatbuffers.UOffsetT(reason), 0)
}
func T_USER_COMPLAINT_RQEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
