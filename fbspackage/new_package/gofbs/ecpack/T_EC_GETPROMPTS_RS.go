// automatically generated by the FlatBuffers compiler, do not modify

package ecpack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_EC_GETPROMPTS_RS struct {
	_tab flatbuffers.Table
}

func GetRootAsT_EC_GETPROMPTS_RS(buf []byte, offset flatbuffers.UOffsetT) *T_EC_GETPROMPTS_RS {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_EC_GETPROMPTS_RS{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_EC_GETPROMPTS_RS) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_EC_GETPROMPTS_RS) SRsHead(obj *S_RS_HEAD) *S_RS_HEAD {
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

func (rcv *T_EC_GETPROMPTS_RS) Promptsmsglist(obj *T_PROMPTMSG_INFO, j int) bool {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		x := rcv._tab.Vector(o)
		x += flatbuffers.UOffsetT(j) * 4
		x = rcv._tab.Indirect(x)
		obj.Init(rcv._tab.Bytes, x)
		return true
	}
	return false
}

func (rcv *T_EC_GETPROMPTS_RS) PromptsmsglistLength() int {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.VectorLen(o)
	}
	return 0
}

func T_EC_GETPROMPTS_RSStart(builder *flatbuffers.Builder) {
	builder.StartObject(2)
}
func T_EC_GETPROMPTS_RSAddSRsHead(builder *flatbuffers.Builder, sRsHead flatbuffers.UOffsetT) {
	builder.PrependStructSlot(0, flatbuffers.UOffsetT(sRsHead), 0)
}
func T_EC_GETPROMPTS_RSAddPromptsmsglist(builder *flatbuffers.Builder, promptsmsglist flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(1, flatbuffers.UOffsetT(promptsmsglist), 0)
}
func T_EC_GETPROMPTS_RSStartPromptsmsglistVector(builder *flatbuffers.Builder, numElems int) flatbuffers.UOffsetT {
	return builder.StartVector(4, numElems, 4)
}
func T_EC_GETPROMPTS_RSEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
