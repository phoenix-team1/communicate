// automatically generated by the FlatBuffers compiler, do not modify

package ecpack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_EC_GETRECENTUSERS_RQ struct {
	_tab flatbuffers.Table
}

func GetRootAsT_EC_GETRECENTUSERS_RQ(buf []byte, offset flatbuffers.UOffsetT) *T_EC_GETRECENTUSERS_RQ {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_EC_GETRECENTUSERS_RQ{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_EC_GETRECENTUSERS_RQ) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_EC_GETRECENTUSERS_RQ) SRqHead(obj *S_RQ_HEAD) *S_RQ_HEAD {
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

func (rcv *T_EC_GETRECENTUSERS_RQ) BId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_EC_GETRECENTUSERS_RQ) MutateBId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(6, n)
}

func T_EC_GETRECENTUSERS_RQStart(builder *flatbuffers.Builder) {
	builder.StartObject(2)
}
func T_EC_GETRECENTUSERS_RQAddSRqHead(builder *flatbuffers.Builder, sRqHead flatbuffers.UOffsetT) {
	builder.PrependStructSlot(0, flatbuffers.UOffsetT(sRqHead), 0)
}
func T_EC_GETRECENTUSERS_RQAddBId(builder *flatbuffers.Builder, bId uint64) {
	builder.PrependUint64Slot(1, bId, 0)
}
func T_EC_GETRECENTUSERS_RQEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
