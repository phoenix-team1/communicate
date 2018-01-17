// automatically generated by the FlatBuffers compiler, do not modify

package friendpack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_CLIENT_FRIEND_BLACKLIST_RQ struct {
	_tab flatbuffers.Table
}

func GetRootAsT_CLIENT_FRIEND_BLACKLIST_RQ(buf []byte, offset flatbuffers.UOffsetT) *T_CLIENT_FRIEND_BLACKLIST_RQ {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_CLIENT_FRIEND_BLACKLIST_RQ{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_CLIENT_FRIEND_BLACKLIST_RQ) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_CLIENT_FRIEND_BLACKLIST_RQ) SRqHead(obj *S_RQ_HEAD) *S_RQ_HEAD {
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

func (rcv *T_CLIENT_FRIEND_BLACKLIST_RQ) PeerUserId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_CLIENT_FRIEND_BLACKLIST_RQ) MutatePeerUserId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(6, n)
}

func (rcv *T_CLIENT_FRIEND_BLACKLIST_RQ) Type() int32 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.GetInt32(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_CLIENT_FRIEND_BLACKLIST_RQ) MutateType(n int32) bool {
	return rcv._tab.MutateInt32Slot(8, n)
}

func T_CLIENT_FRIEND_BLACKLIST_RQStart(builder *flatbuffers.Builder) {
	builder.StartObject(3)
}
func T_CLIENT_FRIEND_BLACKLIST_RQAddSRqHead(builder *flatbuffers.Builder, sRqHead flatbuffers.UOffsetT) {
	builder.PrependStructSlot(0, flatbuffers.UOffsetT(sRqHead), 0)
}
func T_CLIENT_FRIEND_BLACKLIST_RQAddPeerUserId(builder *flatbuffers.Builder, peerUserId uint64) {
	builder.PrependUint64Slot(1, peerUserId, 0)
}
func T_CLIENT_FRIEND_BLACKLIST_RQAddType(builder *flatbuffers.Builder, type int32) {
	builder.PrependInt32Slot(2, type, 0)
}
func T_CLIENT_FRIEND_BLACKLIST_RQEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
