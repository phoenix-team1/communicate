// automatically generated by the FlatBuffers compiler, do not modify

package scpack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_CHAT_CLIENT_SEND_MESSAGE_RQ struct {
	_tab flatbuffers.Table
}

func GetRootAsT_CHAT_CLIENT_SEND_MESSAGE_RQ(buf []byte, offset flatbuffers.UOffsetT) *T_CHAT_CLIENT_SEND_MESSAGE_RQ {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_CHAT_CLIENT_SEND_MESSAGE_RQ{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_CHAT_CLIENT_SEND_MESSAGE_RQ) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_CHAT_CLIENT_SEND_MESSAGE_RQ) SRqHead(obj *S_RQ_HEAD) *S_RQ_HEAD {
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

func (rcv *T_CHAT_CLIENT_SEND_MESSAGE_RQ) OpUserId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_CHAT_CLIENT_SEND_MESSAGE_RQ) MutateOpUserId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(6, n)
}

func (rcv *T_CHAT_CLIENT_SEND_MESSAGE_RQ) MessageId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_CHAT_CLIENT_SEND_MESSAGE_RQ) MutateMessageId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(8, n)
}

func (rcv *T_CHAT_CLIENT_SEND_MESSAGE_RQ) SMsg(obj *S_MSG) *S_MSG {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
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

func (rcv *T_CHAT_CLIENT_SEND_MESSAGE_RQ) BId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(12))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_CHAT_CLIENT_SEND_MESSAGE_RQ) MutateBId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(12, n)
}

func (rcv *T_CHAT_CLIENT_SEND_MESSAGE_RQ) WId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(14))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_CHAT_CLIENT_SEND_MESSAGE_RQ) MutateWId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(14, n)
}

func (rcv *T_CHAT_CLIENT_SEND_MESSAGE_RQ) CId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(16))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_CHAT_CLIENT_SEND_MESSAGE_RQ) MutateCId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(16, n)
}

func T_CHAT_CLIENT_SEND_MESSAGE_RQStart(builder *flatbuffers.Builder) {
	builder.StartObject(7)
}
func T_CHAT_CLIENT_SEND_MESSAGE_RQAddSRqHead(builder *flatbuffers.Builder, sRqHead flatbuffers.UOffsetT) {
	builder.PrependStructSlot(0, flatbuffers.UOffsetT(sRqHead), 0)
}
func T_CHAT_CLIENT_SEND_MESSAGE_RQAddOpUserId(builder *flatbuffers.Builder, opUserId uint64) {
	builder.PrependUint64Slot(1, opUserId, 0)
}
func T_CHAT_CLIENT_SEND_MESSAGE_RQAddMessageId(builder *flatbuffers.Builder, messageId uint64) {
	builder.PrependUint64Slot(2, messageId, 0)
}
func T_CHAT_CLIENT_SEND_MESSAGE_RQAddSMsg(builder *flatbuffers.Builder, sMsg flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(3, flatbuffers.UOffsetT(sMsg), 0)
}
func T_CHAT_CLIENT_SEND_MESSAGE_RQAddBId(builder *flatbuffers.Builder, bId uint64) {
	builder.PrependUint64Slot(4, bId, 0)
}
func T_CHAT_CLIENT_SEND_MESSAGE_RQAddWId(builder *flatbuffers.Builder, wId uint64) {
	builder.PrependUint64Slot(5, wId, 0)
}
func T_CHAT_CLIENT_SEND_MESSAGE_RQAddCId(builder *flatbuffers.Builder, cId uint64) {
	builder.PrependUint64Slot(6, cId, 0)
}
func T_CHAT_CLIENT_SEND_MESSAGE_RQEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
