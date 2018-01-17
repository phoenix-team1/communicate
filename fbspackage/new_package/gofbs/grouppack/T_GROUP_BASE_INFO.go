// automatically generated by the FlatBuffers compiler, do not modify

package grouppack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_GROUP_BASE_INFO struct {
	_tab flatbuffers.Table
}

func GetRootAsT_GROUP_BASE_INFO(buf []byte, offset flatbuffers.UOffsetT) *T_GROUP_BASE_INFO {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_GROUP_BASE_INFO{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_GROUP_BASE_INFO) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_GROUP_BASE_INFO) GroupId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_GROUP_BASE_INFO) MutateGroupId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(4, n)
}

func (rcv *T_GROUP_BASE_INFO) GroupName() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *T_GROUP_BASE_INFO) GroupImgUrl() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *T_GROUP_BASE_INFO) GroupCount() int32 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		return rcv._tab.GetInt32(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_GROUP_BASE_INFO) MutateGroupCount(n int32) bool {
	return rcv._tab.MutateInt32Slot(10, n)
}

func (rcv *T_GROUP_BASE_INFO) GroupManagerUserId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(12))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_GROUP_BASE_INFO) MutateGroupManagerUserId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(12, n)
}

func (rcv *T_GROUP_BASE_INFO) GroupAddIsAgree() int8 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(14))
	if o != 0 {
		return rcv._tab.GetInt8(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_GROUP_BASE_INFO) MutateGroupAddIsAgree(n int8) bool {
	return rcv._tab.MutateInt8Slot(14, n)
}

func (rcv *T_GROUP_BASE_INFO) GroupCt() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(16))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_GROUP_BASE_INFO) MutateGroupCt(n uint64) bool {
	return rcv._tab.MutateUint64Slot(16, n)
}

func (rcv *T_GROUP_BASE_INFO) GroupRemark() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(18))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *T_GROUP_BASE_INFO) GroupMaxCount() int32 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(20))
	if o != 0 {
		return rcv._tab.GetInt32(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_GROUP_BASE_INFO) MutateGroupMaxCount(n int32) bool {
	return rcv._tab.MutateInt32Slot(20, n)
}

func (rcv *T_GROUP_BASE_INFO) MessageStatus() int8 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(22))
	if o != 0 {
		return rcv._tab.GetInt8(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_GROUP_BASE_INFO) MutateMessageStatus(n int8) bool {
	return rcv._tab.MutateInt8Slot(22, n)
}

func (rcv *T_GROUP_BASE_INFO) GroupAddMaxCount() int32 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(24))
	if o != 0 {
		return rcv._tab.GetInt32(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_GROUP_BASE_INFO) MutateGroupAddMaxCount(n int32) bool {
	return rcv._tab.MutateInt32Slot(24, n)
}

func T_GROUP_BASE_INFOStart(builder *flatbuffers.Builder) {
	builder.StartObject(11)
}
func T_GROUP_BASE_INFOAddGroupId(builder *flatbuffers.Builder, groupId uint64) {
	builder.PrependUint64Slot(0, groupId, 0)
}
func T_GROUP_BASE_INFOAddGroupName(builder *flatbuffers.Builder, groupName flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(1, flatbuffers.UOffsetT(groupName), 0)
}
func T_GROUP_BASE_INFOAddGroupImgUrl(builder *flatbuffers.Builder, groupImgUrl flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(2, flatbuffers.UOffsetT(groupImgUrl), 0)
}
func T_GROUP_BASE_INFOAddGroupCount(builder *flatbuffers.Builder, groupCount int32) {
	builder.PrependInt32Slot(3, groupCount, 0)
}
func T_GROUP_BASE_INFOAddGroupManagerUserId(builder *flatbuffers.Builder, groupManagerUserId uint64) {
	builder.PrependUint64Slot(4, groupManagerUserId, 0)
}
func T_GROUP_BASE_INFOAddGroupAddIsAgree(builder *flatbuffers.Builder, groupAddIsAgree int8) {
	builder.PrependInt8Slot(5, groupAddIsAgree, 0)
}
func T_GROUP_BASE_INFOAddGroupCt(builder *flatbuffers.Builder, groupCt uint64) {
	builder.PrependUint64Slot(6, groupCt, 0)
}
func T_GROUP_BASE_INFOAddGroupRemark(builder *flatbuffers.Builder, groupRemark flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(7, flatbuffers.UOffsetT(groupRemark), 0)
}
func T_GROUP_BASE_INFOAddGroupMaxCount(builder *flatbuffers.Builder, groupMaxCount int32) {
	builder.PrependInt32Slot(8, groupMaxCount, 0)
}
func T_GROUP_BASE_INFOAddMessageStatus(builder *flatbuffers.Builder, messageStatus int8) {
	builder.PrependInt8Slot(9, messageStatus, 0)
}
func T_GROUP_BASE_INFOAddGroupAddMaxCount(builder *flatbuffers.Builder, groupAddMaxCount int32) {
	builder.PrependInt32Slot(10, groupAddMaxCount, 0)
}
func T_GROUP_BASE_INFOEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
