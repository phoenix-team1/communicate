// automatically generated by the FlatBuffers compiler, do not modify

package userpack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_CHANGE_MOBILE_RQ struct {
	_tab flatbuffers.Table
}

func GetRootAsT_CHANGE_MOBILE_RQ(buf []byte, offset flatbuffers.UOffsetT) *T_CHANGE_MOBILE_RQ {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_CHANGE_MOBILE_RQ{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_CHANGE_MOBILE_RQ) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_CHANGE_MOBILE_RQ) SRqHead(obj *S_RQ_HEAD) *S_RQ_HEAD {
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

func (rcv *T_CHANGE_MOBILE_RQ) OldMoblie() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_CHANGE_MOBILE_RQ) MutateOldMoblie(n uint64) bool {
	return rcv._tab.MutateUint64Slot(6, n)
}

func (rcv *T_CHANGE_MOBILE_RQ) NewMoblie() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_CHANGE_MOBILE_RQ) MutateNewMoblie(n uint64) bool {
	return rcv._tab.MutateUint64Slot(8, n)
}

func T_CHANGE_MOBILE_RQStart(builder *flatbuffers.Builder) {
	builder.StartObject(3)
}
func T_CHANGE_MOBILE_RQAddSRqHead(builder *flatbuffers.Builder, sRqHead flatbuffers.UOffsetT) {
	builder.PrependStructSlot(0, flatbuffers.UOffsetT(sRqHead), 0)
}
func T_CHANGE_MOBILE_RQAddOldMoblie(builder *flatbuffers.Builder, oldMoblie uint64) {
	builder.PrependUint64Slot(1, oldMoblie, 0)
}
func T_CHANGE_MOBILE_RQAddNewMoblie(builder *flatbuffers.Builder, newMoblie uint64) {
	builder.PrependUint64Slot(2, newMoblie, 0)
}
func T_CHANGE_MOBILE_RQEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
