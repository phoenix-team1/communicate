// automatically generated by the FlatBuffers compiler, do not modify

package ecpack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_EC_SET_LOGINSTATUS_RQ struct {
	_tab flatbuffers.Table
}

func GetRootAsT_EC_SET_LOGINSTATUS_RQ(buf []byte, offset flatbuffers.UOffsetT) *T_EC_SET_LOGINSTATUS_RQ {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_EC_SET_LOGINSTATUS_RQ{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_EC_SET_LOGINSTATUS_RQ) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_EC_SET_LOGINSTATUS_RQ) SRqHead(obj *S_RQ_HEAD) *S_RQ_HEAD {
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

func (rcv *T_EC_SET_LOGINSTATUS_RQ) Status() int32 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.GetInt32(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_EC_SET_LOGINSTATUS_RQ) MutateStatus(n int32) bool {
	return rcv._tab.MutateInt32Slot(6, n)
}

func T_EC_SET_LOGINSTATUS_RQStart(builder *flatbuffers.Builder) {
	builder.StartObject(2)
}
func T_EC_SET_LOGINSTATUS_RQAddSRqHead(builder *flatbuffers.Builder, sRqHead flatbuffers.UOffsetT) {
	builder.PrependStructSlot(0, flatbuffers.UOffsetT(sRqHead), 0)
}
func T_EC_SET_LOGINSTATUS_RQAddStatus(builder *flatbuffers.Builder, status int32) {
	builder.PrependInt32Slot(1, status, 0)
}
func T_EC_SET_LOGINSTATUS_RQEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
