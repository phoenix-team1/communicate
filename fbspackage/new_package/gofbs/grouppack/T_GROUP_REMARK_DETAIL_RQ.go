// automatically generated by the FlatBuffers compiler, do not modify

package grouppack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_GROUP_REMARK_DETAIL_RQ struct {
	_tab flatbuffers.Table
}

func GetRootAsT_GROUP_REMARK_DETAIL_RQ(buf []byte, offset flatbuffers.UOffsetT) *T_GROUP_REMARK_DETAIL_RQ {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_GROUP_REMARK_DETAIL_RQ{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_GROUP_REMARK_DETAIL_RQ) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_GROUP_REMARK_DETAIL_RQ) SRqHead(obj *S_RQ_HEAD) *S_RQ_HEAD {
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

func (rcv *T_GROUP_REMARK_DETAIL_RQ) GroupId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_GROUP_REMARK_DETAIL_RQ) MutateGroupId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(6, n)
}

func T_GROUP_REMARK_DETAIL_RQStart(builder *flatbuffers.Builder) {
	builder.StartObject(2)
}
func T_GROUP_REMARK_DETAIL_RQAddSRqHead(builder *flatbuffers.Builder, sRqHead flatbuffers.UOffsetT) {
	builder.PrependStructSlot(0, flatbuffers.UOffsetT(sRqHead), 0)
}
func T_GROUP_REMARK_DETAIL_RQAddGroupId(builder *flatbuffers.Builder, groupId uint64) {
	builder.PrependUint64Slot(1, groupId, 0)
}
func T_GROUP_REMARK_DETAIL_RQEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
