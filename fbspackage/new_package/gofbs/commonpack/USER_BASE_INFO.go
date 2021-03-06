// automatically generated by the FlatBuffers compiler, do not modify

package commonpack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type USER_BASE_INFO struct {
	_tab flatbuffers.Table
}

func GetRootAsUSER_BASE_INFO(buf []byte, offset flatbuffers.UOffsetT) *USER_BASE_INFO {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &USER_BASE_INFO{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *USER_BASE_INFO) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *USER_BASE_INFO) UserId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *USER_BASE_INFO) MutateUserId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(4, n)
}

func (rcv *USER_BASE_INFO) UserNickName() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *USER_BASE_INFO) UserGroupIndex() int32 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.GetInt32(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *USER_BASE_INFO) MutateUserGroupIndex(n int32) bool {
	return rcv._tab.MutateInt32Slot(8, n)
}

func USER_BASE_INFOStart(builder *flatbuffers.Builder) {
	builder.StartObject(3)
}
func USER_BASE_INFOAddUserId(builder *flatbuffers.Builder, userId uint64) {
	builder.PrependUint64Slot(0, userId, 0)
}
func USER_BASE_INFOAddUserNickName(builder *flatbuffers.Builder, userNickName flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(1, flatbuffers.UOffsetT(userNickName), 0)
}
func USER_BASE_INFOAddUserGroupIndex(builder *flatbuffers.Builder, userGroupIndex int32) {
	builder.PrependInt32Slot(2, userGroupIndex, 0)
}
func USER_BASE_INFOEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
