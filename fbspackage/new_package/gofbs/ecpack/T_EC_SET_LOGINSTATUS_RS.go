// automatically generated by the FlatBuffers compiler, do not modify

package ecpack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_EC_SET_LOGINSTATUS_RS struct {
	_tab flatbuffers.Table
}

func GetRootAsT_EC_SET_LOGINSTATUS_RS(buf []byte, offset flatbuffers.UOffsetT) *T_EC_SET_LOGINSTATUS_RS {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_EC_SET_LOGINSTATUS_RS{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_EC_SET_LOGINSTATUS_RS) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_EC_SET_LOGINSTATUS_RS) SRsHead(obj *S_RS_HEAD) *S_RS_HEAD {
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

func T_EC_SET_LOGINSTATUS_RSStart(builder *flatbuffers.Builder) {
	builder.StartObject(1)
}
func T_EC_SET_LOGINSTATUS_RSAddSRsHead(builder *flatbuffers.Builder, sRsHead flatbuffers.UOffsetT) {
	builder.PrependStructSlot(0, flatbuffers.UOffsetT(sRsHead), 0)
}
func T_EC_SET_LOGINSTATUS_RSEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}