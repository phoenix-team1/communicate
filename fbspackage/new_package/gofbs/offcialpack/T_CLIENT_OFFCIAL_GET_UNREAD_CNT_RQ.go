// automatically generated by the FlatBuffers compiler, do not modify

package offcialpack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_CLIENT_OFFCIAL_GET_UNREAD_CNT_RQ struct {
	_tab flatbuffers.Table
}

func GetRootAsT_CLIENT_OFFCIAL_GET_UNREAD_CNT_RQ(buf []byte, offset flatbuffers.UOffsetT) *T_CLIENT_OFFCIAL_GET_UNREAD_CNT_RQ {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_CLIENT_OFFCIAL_GET_UNREAD_CNT_RQ{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_CLIENT_OFFCIAL_GET_UNREAD_CNT_RQ) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_CLIENT_OFFCIAL_GET_UNREAD_CNT_RQ) SRqHead(obj *S_RQ_HEAD) *S_RQ_HEAD {
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

func (rcv *T_CLIENT_OFFCIAL_GET_UNREAD_CNT_RQ) ListBId(j int) uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		a := rcv._tab.Vector(o)
		return rcv._tab.GetUint64(a + flatbuffers.UOffsetT(j*8))
	}
	return 0
}

func (rcv *T_CLIENT_OFFCIAL_GET_UNREAD_CNT_RQ) ListBIdLength() int {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.VectorLen(o)
	}
	return 0
}

func T_CLIENT_OFFCIAL_GET_UNREAD_CNT_RQStart(builder *flatbuffers.Builder) {
	builder.StartObject(2)
}
func T_CLIENT_OFFCIAL_GET_UNREAD_CNT_RQAddSRqHead(builder *flatbuffers.Builder, sRqHead flatbuffers.UOffsetT) {
	builder.PrependStructSlot(0, flatbuffers.UOffsetT(sRqHead), 0)
}
func T_CLIENT_OFFCIAL_GET_UNREAD_CNT_RQAddListBId(builder *flatbuffers.Builder, listBId flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(1, flatbuffers.UOffsetT(listBId), 0)
}
func T_CLIENT_OFFCIAL_GET_UNREAD_CNT_RQStartListBIdVector(builder *flatbuffers.Builder, numElems int) flatbuffers.UOffsetT {
	return builder.StartVector(8, numElems, 8)
}
func T_CLIENT_OFFCIAL_GET_UNREAD_CNT_RQEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
