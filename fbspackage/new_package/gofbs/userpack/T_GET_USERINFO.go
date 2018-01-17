// automatically generated by the FlatBuffers compiler, do not modify

package userpack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_GET_USERINFO struct {
	_tab flatbuffers.Table
}

func GetRootAsT_GET_USERINFO(buf []byte, offset flatbuffers.UOffsetT) *T_GET_USERINFO {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_GET_USERINFO{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_GET_USERINFO) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_GET_USERINFO) UserId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_GET_USERINFO) MutateUserId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(4, n)
}

func (rcv *T_GET_USERINFO) UserName() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *T_GET_USERINFO) NickName() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *T_GET_USERINFO) Mobile() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_GET_USERINFO) MutateMobile(n uint64) bool {
	return rcv._tab.MutateUint64Slot(10, n)
}

func T_GET_USERINFOStart(builder *flatbuffers.Builder) {
	builder.StartObject(4)
}
func T_GET_USERINFOAddUserId(builder *flatbuffers.Builder, userId uint64) {
	builder.PrependUint64Slot(0, userId, 0)
}
func T_GET_USERINFOAddUserName(builder *flatbuffers.Builder, userName flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(1, flatbuffers.UOffsetT(userName), 0)
}
func T_GET_USERINFOAddNickName(builder *flatbuffers.Builder, nickName flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(2, flatbuffers.UOffsetT(nickName), 0)
}
func T_GET_USERINFOAddMobile(builder *flatbuffers.Builder, mobile uint64) {
	builder.PrependUint64Slot(3, mobile, 0)
}
func T_GET_USERINFOEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
