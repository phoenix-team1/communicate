// automatically generated by the FlatBuffers compiler, do not modify

package friendpack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_FRIEND_SERVER_ADD_RQ struct {
	_tab flatbuffers.Table
}

func GetRootAsT_FRIEND_SERVER_ADD_RQ(buf []byte, offset flatbuffers.UOffsetT) *T_FRIEND_SERVER_ADD_RQ {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_FRIEND_SERVER_ADD_RQ{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_FRIEND_SERVER_ADD_RQ) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_FRIEND_SERVER_ADD_RQ) SRqHead(obj *S_RQ_HEAD) *S_RQ_HEAD {
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

func (rcv *T_FRIEND_SERVER_ADD_RQ) OpMsg() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *T_FRIEND_SERVER_ADD_RQ) PeerUserName() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *T_FRIEND_SERVER_ADD_RQ) PeerUserId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_FRIEND_SERVER_ADD_RQ) MutatePeerUserId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(10, n)
}

func (rcv *T_FRIEND_SERVER_ADD_RQ) SourceType() int8 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(12))
	if o != 0 {
		return rcv._tab.GetInt8(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_FRIEND_SERVER_ADD_RQ) MutateSourceType(n int8) bool {
	return rcv._tab.MutateInt8Slot(12, n)
}

func (rcv *T_FRIEND_SERVER_ADD_RQ) Token() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(14))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_FRIEND_SERVER_ADD_RQ) MutateToken(n uint64) bool {
	return rcv._tab.MutateUint64Slot(14, n)
}

func T_FRIEND_SERVER_ADD_RQStart(builder *flatbuffers.Builder) {
	builder.StartObject(6)
}
func T_FRIEND_SERVER_ADD_RQAddSRqHead(builder *flatbuffers.Builder, sRqHead flatbuffers.UOffsetT) {
	builder.PrependStructSlot(0, flatbuffers.UOffsetT(sRqHead), 0)
}
func T_FRIEND_SERVER_ADD_RQAddOpMsg(builder *flatbuffers.Builder, opMsg flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(1, flatbuffers.UOffsetT(opMsg), 0)
}
func T_FRIEND_SERVER_ADD_RQAddPeerUserName(builder *flatbuffers.Builder, peerUserName flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(2, flatbuffers.UOffsetT(peerUserName), 0)
}
func T_FRIEND_SERVER_ADD_RQAddPeerUserId(builder *flatbuffers.Builder, peerUserId uint64) {
	builder.PrependUint64Slot(3, peerUserId, 0)
}
func T_FRIEND_SERVER_ADD_RQAddSourceType(builder *flatbuffers.Builder, sourceType int8) {
	builder.PrependInt8Slot(4, sourceType, 0)
}
func T_FRIEND_SERVER_ADD_RQAddToken(builder *flatbuffers.Builder, token uint64) {
	builder.PrependUint64Slot(5, token, 0)
}
func T_FRIEND_SERVER_ADD_RQEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
