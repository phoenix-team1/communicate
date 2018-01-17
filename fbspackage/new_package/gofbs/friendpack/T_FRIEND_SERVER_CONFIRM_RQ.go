// automatically generated by the FlatBuffers compiler, do not modify

package friendpack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_FRIEND_SERVER_CONFIRM_RQ struct {
	_tab flatbuffers.Table
}

func GetRootAsT_FRIEND_SERVER_CONFIRM_RQ(buf []byte, offset flatbuffers.UOffsetT) *T_FRIEND_SERVER_CONFIRM_RQ {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_FRIEND_SERVER_CONFIRM_RQ{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_FRIEND_SERVER_CONFIRM_RQ) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_FRIEND_SERVER_CONFIRM_RQ) SRqHead(obj *S_RQ_HEAD) *S_RQ_HEAD {
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

func (rcv *T_FRIEND_SERVER_CONFIRM_RQ) PeerNickname() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *T_FRIEND_SERVER_CONFIRM_RQ) PeerUserId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_FRIEND_SERVER_CONFIRM_RQ) MutatePeerUserId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(8, n)
}

func (rcv *T_FRIEND_SERVER_CONFIRM_RQ) Token() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_FRIEND_SERVER_CONFIRM_RQ) MutateToken(n uint64) bool {
	return rcv._tab.MutateUint64Slot(10, n)
}

func (rcv *T_FRIEND_SERVER_CONFIRM_RQ) Result() int32 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(12))
	if o != 0 {
		return rcv._tab.GetInt32(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_FRIEND_SERVER_CONFIRM_RQ) MutateResult(n int32) bool {
	return rcv._tab.MutateInt32Slot(12, n)
}

func T_FRIEND_SERVER_CONFIRM_RQStart(builder *flatbuffers.Builder) {
	builder.StartObject(5)
}
func T_FRIEND_SERVER_CONFIRM_RQAddSRqHead(builder *flatbuffers.Builder, sRqHead flatbuffers.UOffsetT) {
	builder.PrependStructSlot(0, flatbuffers.UOffsetT(sRqHead), 0)
}
func T_FRIEND_SERVER_CONFIRM_RQAddPeerNickname(builder *flatbuffers.Builder, peerNickname flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(1, flatbuffers.UOffsetT(peerNickname), 0)
}
func T_FRIEND_SERVER_CONFIRM_RQAddPeerUserId(builder *flatbuffers.Builder, peerUserId uint64) {
	builder.PrependUint64Slot(2, peerUserId, 0)
}
func T_FRIEND_SERVER_CONFIRM_RQAddToken(builder *flatbuffers.Builder, token uint64) {
	builder.PrependUint64Slot(3, token, 0)
}
func T_FRIEND_SERVER_CONFIRM_RQAddResult(builder *flatbuffers.Builder, result int32) {
	builder.PrependInt32Slot(4, result, 0)
}
func T_FRIEND_SERVER_CONFIRM_RQEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
