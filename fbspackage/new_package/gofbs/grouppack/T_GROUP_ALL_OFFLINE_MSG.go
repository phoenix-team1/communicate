// automatically generated by the FlatBuffers compiler, do not modify

package grouppack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_GROUP_ALL_OFFLINE_MSG struct {
	_tab flatbuffers.Table
}

func GetRootAsT_GROUP_ALL_OFFLINE_MSG(buf []byte, offset flatbuffers.UOffsetT) *T_GROUP_ALL_OFFLINE_MSG {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_GROUP_ALL_OFFLINE_MSG{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_GROUP_ALL_OFFLINE_MSG) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_GROUP_ALL_OFFLINE_MSG) IsFinish() int8 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.GetInt8(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_GROUP_ALL_OFFLINE_MSG) MutateIsFinish(n int8) bool {
	return rcv._tab.MutateInt8Slot(4, n)
}

func (rcv *T_GROUP_ALL_OFFLINE_MSG) GroupId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_GROUP_ALL_OFFLINE_MSG) MutateGroupId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(6, n)
}

func (rcv *T_GROUP_ALL_OFFLINE_MSG) SOfflineMsgList(obj *T_OFFLINE_GROUP_MSG, j int) bool {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		x := rcv._tab.Vector(o)
		x += flatbuffers.UOffsetT(j) * 4
		x = rcv._tab.Indirect(x)
		obj.Init(rcv._tab.Bytes, x)
		return true
	}
	return false
}

func (rcv *T_GROUP_ALL_OFFLINE_MSG) SOfflineMsgListLength() int {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.VectorLen(o)
	}
	return 0
}

func T_GROUP_ALL_OFFLINE_MSGStart(builder *flatbuffers.Builder) {
	builder.StartObject(3)
}
func T_GROUP_ALL_OFFLINE_MSGAddIsFinish(builder *flatbuffers.Builder, isFinish int8) {
	builder.PrependInt8Slot(0, isFinish, 0)
}
func T_GROUP_ALL_OFFLINE_MSGAddGroupId(builder *flatbuffers.Builder, groupId uint64) {
	builder.PrependUint64Slot(1, groupId, 0)
}
func T_GROUP_ALL_OFFLINE_MSGAddSOfflineMsgList(builder *flatbuffers.Builder, sOfflineMsgList flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(2, flatbuffers.UOffsetT(sOfflineMsgList), 0)
}
func T_GROUP_ALL_OFFLINE_MSGStartSOfflineMsgListVector(builder *flatbuffers.Builder, numElems int) flatbuffers.UOffsetT {
	return builder.StartVector(4, numElems, 4)
}
func T_GROUP_ALL_OFFLINE_MSGEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}