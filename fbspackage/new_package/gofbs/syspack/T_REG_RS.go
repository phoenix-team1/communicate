// automatically generated by the FlatBuffers compiler, do not modify

package syspack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_REG_RS struct {
	_tab flatbuffers.Table
}

func GetRootAsT_REG_RS(buf []byte, offset flatbuffers.UOffsetT) *T_REG_RS {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_REG_RS{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_REG_RS) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_REG_RS) SRsHead(obj *S_RS_HEAD) *S_RS_HEAD {
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

func (rcv *T_REG_RS) AccountInfo(obj *ACCOUNT_INFO) *ACCOUNT_INFO {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		x := rcv._tab.Indirect(o + rcv._tab.Pos)
		if obj == nil {
			obj = new(ACCOUNT_INFO)
		}
		obj.Init(rcv._tab.Bytes, x)
		return obj
	}
	return nil
}

func (rcv *T_REG_RS) UserId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_REG_RS) MutateUserId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(8, n)
}

func (rcv *T_REG_RS) RegToken() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func T_REG_RSStart(builder *flatbuffers.Builder) {
	builder.StartObject(4)
}
func T_REG_RSAddSRsHead(builder *flatbuffers.Builder, sRsHead flatbuffers.UOffsetT) {
	builder.PrependStructSlot(0, flatbuffers.UOffsetT(sRsHead), 0)
}
func T_REG_RSAddAccountInfo(builder *flatbuffers.Builder, accountInfo flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(1, flatbuffers.UOffsetT(accountInfo), 0)
}
func T_REG_RSAddUserId(builder *flatbuffers.Builder, userId uint64) {
	builder.PrependUint64Slot(2, userId, 0)
}
func T_REG_RSAddRegToken(builder *flatbuffers.Builder, regToken flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(3, flatbuffers.UOffsetT(regToken), 0)
}
func T_REG_RSEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}