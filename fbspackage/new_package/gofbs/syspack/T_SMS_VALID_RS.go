// automatically generated by the FlatBuffers compiler, do not modify

package syspack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_SMS_VALID_RS struct {
	_tab flatbuffers.Table
}

func GetRootAsT_SMS_VALID_RS(buf []byte, offset flatbuffers.UOffsetT) *T_SMS_VALID_RS {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_SMS_VALID_RS{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_SMS_VALID_RS) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_SMS_VALID_RS) SRsHead(obj *S_RS_HEAD) *S_RS_HEAD {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		x := o + rcv._tab.Pos
		if obj == nil {
			obj = new(S_RS_HEAD)
		}
		obj.Init(rcv._tab.Bytes, x)
		return obj
	}
	return nil
}

func (rcv *T_SMS_VALID_RS) VerifyCode() int32 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.GetInt32(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_SMS_VALID_RS) MutateVerifyCode(n int32) bool {
	return rcv._tab.MutateInt32Slot(6, n)
}

func T_SMS_VALID_RSStart(builder *flatbuffers.Builder) {
	builder.StartObject(2)
}
func T_SMS_VALID_RSAddSRsHead(builder *flatbuffers.Builder, sRsHead flatbuffers.UOffsetT) {
	builder.PrependStructSlot(0, flatbuffers.UOffsetT(sRsHead), 0)
}
func T_SMS_VALID_RSAddVerifyCode(builder *flatbuffers.Builder, verifyCode int32) {
	builder.PrependInt32Slot(1, verifyCode, 0)
}
func T_SMS_VALID_RSEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
