// automatically generated by the FlatBuffers compiler, do not modify

package userpack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_KEYINFO struct {
	_tab flatbuffers.Table
}

func GetRootAsT_KEYINFO(buf []byte, offset flatbuffers.UOffsetT) *T_KEYINFO {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_KEYINFO{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_KEYINFO) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_KEYINFO) KeyName() int32 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.GetInt32(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_KEYINFO) MutateKeyName(n int32) bool {
	return rcv._tab.MutateInt32Slot(4, n)
}

func (rcv *T_KEYINFO) KeyValue() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func T_KEYINFOStart(builder *flatbuffers.Builder) {
	builder.StartObject(2)
}
func T_KEYINFOAddKeyName(builder *flatbuffers.Builder, keyName int32) {
	builder.PrependInt32Slot(0, keyName, 0)
}
func T_KEYINFOAddKeyValue(builder *flatbuffers.Builder, keyValue flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(1, flatbuffers.UOffsetT(keyValue), 0)
}
func T_KEYINFOEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
