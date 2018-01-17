// automatically generated by the FlatBuffers compiler, do not modify

package grouppack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_OFFLINE_GROUP_MSG struct {
	_tab flatbuffers.Table
}

func GetRootAsT_OFFLINE_GROUP_MSG(buf []byte, offset flatbuffers.UOffsetT) *T_OFFLINE_GROUP_MSG {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_OFFLINE_GROUP_MSG{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_OFFLINE_GROUP_MSG) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_OFFLINE_GROUP_MSG) UserId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_OFFLINE_GROUP_MSG) MutateUserId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(4, n)
}

func (rcv *T_OFFLINE_GROUP_MSG) MessageId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_OFFLINE_GROUP_MSG) MutateMessageId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(6, n)
}

func (rcv *T_OFFLINE_GROUP_MSG) SMsg(obj *S_MSG) *S_MSG {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
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

func (rcv *T_OFFLINE_GROUP_MSG) BigMsgType() int32 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		return rcv._tab.GetInt32(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_OFFLINE_GROUP_MSG) MutateBigMsgType(n int32) bool {
	return rcv._tab.MutateInt32Slot(10, n)
}

func (rcv *T_OFFLINE_GROUP_MSG) OperateGroupMsg(obj *T_OPERATE_GROUP_MSG) *T_OPERATE_GROUP_MSG {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(12))
	if o != 0 {
		x := rcv._tab.Indirect(o + rcv._tab.Pos)
		if obj == nil {
			obj = new(T_OPERATE_GROUP_MSG)
		}
		obj.Init(rcv._tab.Bytes, x)
		return obj
	}
	return nil
}

func (rcv *T_OFFLINE_GROUP_MSG) MessageOldId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(14))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_OFFLINE_GROUP_MSG) MutateMessageOldId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(14, n)
}

func (rcv *T_OFFLINE_GROUP_MSG) GroupInfo(obj *T_GROUP_BASE_INFO) *T_GROUP_BASE_INFO {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(16))
	if o != 0 {
		x := rcv._tab.Indirect(o + rcv._tab.Pos)
		if obj == nil {
			obj = new(T_GROUP_BASE_INFO)
		}
		obj.Init(rcv._tab.Bytes, x)
		return obj
	}
	return nil
}

func T_OFFLINE_GROUP_MSGStart(builder *flatbuffers.Builder) {
	builder.StartObject(7)
}
func T_OFFLINE_GROUP_MSGAddUserId(builder *flatbuffers.Builder, userId uint64) {
	builder.PrependUint64Slot(0, userId, 0)
}
func T_OFFLINE_GROUP_MSGAddMessageId(builder *flatbuffers.Builder, messageId uint64) {
	builder.PrependUint64Slot(1, messageId, 0)
}
func T_OFFLINE_GROUP_MSGAddSMsg(builder *flatbuffers.Builder, sMsg flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(2, flatbuffers.UOffsetT(sMsg), 0)
}
func T_OFFLINE_GROUP_MSGAddBigMsgType(builder *flatbuffers.Builder, bigMsgType int32) {
	builder.PrependInt32Slot(3, bigMsgType, 0)
}
func T_OFFLINE_GROUP_MSGAddOperateGroupMsg(builder *flatbuffers.Builder, operateGroupMsg flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(4, flatbuffers.UOffsetT(operateGroupMsg), 0)
}
func T_OFFLINE_GROUP_MSGAddMessageOldId(builder *flatbuffers.Builder, messageOldId uint64) {
	builder.PrependUint64Slot(5, messageOldId, 0)
}
func T_OFFLINE_GROUP_MSGAddGroupInfo(builder *flatbuffers.Builder, groupInfo flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(6, flatbuffers.UOffsetT(groupInfo), 0)
}
func T_OFFLINE_GROUP_MSGEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
