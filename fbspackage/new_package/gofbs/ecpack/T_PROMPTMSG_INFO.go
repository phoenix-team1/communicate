// automatically generated by the FlatBuffers compiler, do not modify

package ecpack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_PROMPTMSG_INFO struct {
	_tab flatbuffers.Table
}

func GetRootAsT_PROMPTMSG_INFO(buf []byte, offset flatbuffers.UOffsetT) *T_PROMPTMSG_INFO {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_PROMPTMSG_INFO{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_PROMPTMSG_INFO) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_PROMPTMSG_INFO) BId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_PROMPTMSG_INFO) MutateBId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(4, n)
}

func (rcv *T_PROMPTMSG_INFO) PromptsType() int32 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.GetInt32(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_PROMPTMSG_INFO) MutatePromptsType(n int32) bool {
	return rcv._tab.MutateInt32Slot(6, n)
}

func (rcv *T_PROMPTMSG_INFO) PromptsMsg() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func T_PROMPTMSG_INFOStart(builder *flatbuffers.Builder) {
	builder.StartObject(3)
}
func T_PROMPTMSG_INFOAddBId(builder *flatbuffers.Builder, bId uint64) {
	builder.PrependUint64Slot(0, bId, 0)
}
func T_PROMPTMSG_INFOAddPromptsType(builder *flatbuffers.Builder, promptsType int32) {
	builder.PrependInt32Slot(1, promptsType, 0)
}
func T_PROMPTMSG_INFOAddPromptsMsg(builder *flatbuffers.Builder, promptsMsg flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(2, flatbuffers.UOffsetT(promptsMsg), 0)
}
func T_PROMPTMSG_INFOEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
