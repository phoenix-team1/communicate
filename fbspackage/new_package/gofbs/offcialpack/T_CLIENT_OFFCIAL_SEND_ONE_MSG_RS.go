// automatically generated by the FlatBuffers compiler, do not modify

package offcialpack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS struct {
	_tab flatbuffers.Table
}

func GetRootAsT_CLIENT_OFFCIAL_SEND_ONE_MSG_RS(buf []byte, offset flatbuffers.UOffsetT) *T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS) SRsHead(obj *S_RS_HEAD) *S_RS_HEAD {
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

func (rcv *T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS) MessageId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS) MutateMessageId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(6, n)
}

func (rcv *T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS) OffcialId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS) MutateOffcialId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(8, n)
}

func (rcv *T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS) FansId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS) MutateFansId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(10, n)
}

func (rcv *T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS) SMsg(obj *S_MSG) *S_MSG {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(12))
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

func (rcv *T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS) BId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(14))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS) MutateBId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(14, n)
}

func (rcv *T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS) WId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(16))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS) MutateWId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(16, n)
}

func (rcv *T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS) CId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(18))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS) MutateCId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(18, n)
}

func T_CLIENT_OFFCIAL_SEND_ONE_MSG_RSStart(builder *flatbuffers.Builder) {
	builder.StartObject(8)
}
func T_CLIENT_OFFCIAL_SEND_ONE_MSG_RSAddSRsHead(builder *flatbuffers.Builder, sRsHead flatbuffers.UOffsetT) {
	builder.PrependStructSlot(0, flatbuffers.UOffsetT(sRsHead), 0)
}
func T_CLIENT_OFFCIAL_SEND_ONE_MSG_RSAddMessageId(builder *flatbuffers.Builder, messageId uint64) {
	builder.PrependUint64Slot(1, messageId, 0)
}
func T_CLIENT_OFFCIAL_SEND_ONE_MSG_RSAddOffcialId(builder *flatbuffers.Builder, offcialId uint64) {
	builder.PrependUint64Slot(2, offcialId, 0)
}
func T_CLIENT_OFFCIAL_SEND_ONE_MSG_RSAddFansId(builder *flatbuffers.Builder, fansId uint64) {
	builder.PrependUint64Slot(3, fansId, 0)
}
func T_CLIENT_OFFCIAL_SEND_ONE_MSG_RSAddSMsg(builder *flatbuffers.Builder, sMsg flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(4, flatbuffers.UOffsetT(sMsg), 0)
}
func T_CLIENT_OFFCIAL_SEND_ONE_MSG_RSAddBId(builder *flatbuffers.Builder, bId uint64) {
	builder.PrependUint64Slot(5, bId, 0)
}
func T_CLIENT_OFFCIAL_SEND_ONE_MSG_RSAddWId(builder *flatbuffers.Builder, wId uint64) {
	builder.PrependUint64Slot(6, wId, 0)
}
func T_CLIENT_OFFCIAL_SEND_ONE_MSG_RSAddCId(builder *flatbuffers.Builder, cId uint64) {
	builder.PrependUint64Slot(7, cId, 0)
}
func T_CLIENT_OFFCIAL_SEND_ONE_MSG_RSEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
