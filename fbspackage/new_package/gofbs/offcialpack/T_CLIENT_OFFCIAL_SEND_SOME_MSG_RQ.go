// automatically generated by the FlatBuffers compiler, do not modify

package offcialpack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQ struct {
	_tab flatbuffers.Table
}

func GetRootAsT_CLIENT_OFFCIAL_SEND_SOME_MSG_RQ(buf []byte, offset flatbuffers.UOffsetT) *T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQ {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQ{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQ) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQ) SRqHead(obj *S_RQ_HEAD) *S_RQ_HEAD {
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

func (rcv *T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQ) MessageId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQ) MutateMessageId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(6, n)
}

func (rcv *T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQ) OffcialId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQ) MutateOffcialId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(8, n)
}

func (rcv *T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQ) ToFansLst(j int) uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		a := rcv._tab.Vector(o)
		return rcv._tab.GetUint64(a + flatbuffers.UOffsetT(j*8))
	}
	return 0
}

func (rcv *T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQ) ToFansLstLength() int {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		return rcv._tab.VectorLen(o)
	}
	return 0
}

func (rcv *T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQ) GroupId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(12))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQ) MutateGroupId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(12, n)
}

func (rcv *T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQ) SMsg(obj *S_MSG) *S_MSG {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(14))
	if o != 0 {
		x := rcv._tab.Indirect(o + rcv._tab.Pos)
		if obj == nil {
			obj = new(S_MSG)
		}
		obj.Init(rcv._tab.Bytes, x)
		return obj
	}
	return nil
}

func (rcv *T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQ) BId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(16))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQ) MutateBId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(16, n)
}

func (rcv *T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQ) WId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(18))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQ) MutateWId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(18, n)
}

func (rcv *T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQ) CId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(20))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQ) MutateCId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(20, n)
}

func T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQStart(builder *flatbuffers.Builder) {
	builder.StartObject(9)
}
func T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQAddSRqHead(builder *flatbuffers.Builder, sRqHead flatbuffers.UOffsetT) {
	builder.PrependStructSlot(0, flatbuffers.UOffsetT(sRqHead), 0)
}
func T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQAddMessageId(builder *flatbuffers.Builder, messageId uint64) {
	builder.PrependUint64Slot(1, messageId, 0)
}
func T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQAddOffcialId(builder *flatbuffers.Builder, offcialId uint64) {
	builder.PrependUint64Slot(2, offcialId, 0)
}
func T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQAddToFansLst(builder *flatbuffers.Builder, toFansLst flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(3, flatbuffers.UOffsetT(toFansLst), 0)
}
func T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQStartToFansLstVector(builder *flatbuffers.Builder, numElems int) flatbuffers.UOffsetT {
	return builder.StartVector(8, numElems, 8)
}
func T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQAddGroupId(builder *flatbuffers.Builder, groupId uint64) {
	builder.PrependUint64Slot(4, groupId, 0)
}
func T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQAddSMsg(builder *flatbuffers.Builder, sMsg flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(5, flatbuffers.UOffsetT(sMsg), 0)
}
func T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQAddBId(builder *flatbuffers.Builder, bId uint64) {
	builder.PrependUint64Slot(6, bId, 0)
}
func T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQAddWId(builder *flatbuffers.Builder, wId uint64) {
	builder.PrependUint64Slot(7, wId, 0)
}
func T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQAddCId(builder *flatbuffers.Builder, cId uint64) {
	builder.PrependUint64Slot(8, cId, 0)
}
func T_CLIENT_OFFCIAL_SEND_SOME_MSG_RQEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
