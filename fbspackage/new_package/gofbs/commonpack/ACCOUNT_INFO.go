// automatically generated by the FlatBuffers compiler, do not modify

package commonpack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type ACCOUNT_INFO struct {
	_tab flatbuffers.Table
}

func GetRootAsACCOUNT_INFO(buf []byte, offset flatbuffers.UOffsetT) *ACCOUNT_INFO {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &ACCOUNT_INFO{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *ACCOUNT_INFO) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *ACCOUNT_INFO) AccountType() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *ACCOUNT_INFO) MutateAccountType(n uint64) bool {
	return rcv._tab.MutateUint64Slot(4, n)
}

func (rcv *ACCOUNT_INFO) TargetUserId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *ACCOUNT_INFO) MutateTargetUserId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(6, n)
}

func (rcv *ACCOUNT_INFO) TargetUserToken() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *ACCOUNT_INFO) TargetUserName() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func ACCOUNT_INFOStart(builder *flatbuffers.Builder) {
	builder.StartObject(4)
}
func ACCOUNT_INFOAddAccountType(builder *flatbuffers.Builder, accountType uint64) {
	builder.PrependUint64Slot(0, accountType, 0)
}
func ACCOUNT_INFOAddTargetUserId(builder *flatbuffers.Builder, targetUserId uint64) {
	builder.PrependUint64Slot(1, targetUserId, 0)
}
func ACCOUNT_INFOAddTargetUserToken(builder *flatbuffers.Builder, targetUserToken flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(2, flatbuffers.UOffsetT(targetUserToken), 0)
}
func ACCOUNT_INFOAddTargetUserName(builder *flatbuffers.Builder, targetUserName flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(3, flatbuffers.UOffsetT(targetUserName), 0)
}
func ACCOUNT_INFOEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
