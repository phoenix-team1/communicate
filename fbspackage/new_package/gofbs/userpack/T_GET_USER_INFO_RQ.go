// automatically generated by the FlatBuffers compiler, do not modify

package userpack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_GET_USER_INFO_RQ struct {
	_tab flatbuffers.Table
}

func GetRootAsT_GET_USER_INFO_RQ(buf []byte, offset flatbuffers.UOffsetT) *T_GET_USER_INFO_RQ {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_GET_USER_INFO_RQ{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_GET_USER_INFO_RQ) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_GET_USER_INFO_RQ) SRqHead(obj *S_RQ_HEAD) *S_RQ_HEAD {
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

func (rcv *T_GET_USER_INFO_RQ) UserMsg() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func T_GET_USER_INFO_RQStart(builder *flatbuffers.Builder) {
	builder.StartObject(2)
}
func T_GET_USER_INFO_RQAddSRqHead(builder *flatbuffers.Builder, sRqHead flatbuffers.UOffsetT) {
	builder.PrependStructSlot(0, flatbuffers.UOffsetT(sRqHead), 0)
}
func T_GET_USER_INFO_RQAddUserMsg(builder *flatbuffers.Builder, userMsg flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(1, flatbuffers.UOffsetT(userMsg), 0)
}
func T_GET_USER_INFO_RQEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}