// automatically generated by the FlatBuffers compiler, do not modify

package offcialpack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_CLIENT_OFFCIAL_SEND_ONE_SYS_MSG_RS struct {
	_tab flatbuffers.Table
}

func GetRootAsT_CLIENT_OFFCIAL_SEND_ONE_SYS_MSG_RS(buf []byte, offset flatbuffers.UOffsetT) *T_CLIENT_OFFCIAL_SEND_ONE_SYS_MSG_RS {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_CLIENT_OFFCIAL_SEND_ONE_SYS_MSG_RS{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_CLIENT_OFFCIAL_SEND_ONE_SYS_MSG_RS) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_CLIENT_OFFCIAL_SEND_ONE_SYS_MSG_RS) SRsHead(obj *S_RS_HEAD) *S_RS_HEAD {
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

func (rcv *T_CLIENT_OFFCIAL_SEND_ONE_SYS_MSG_RS) FansId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_CLIENT_OFFCIAL_SEND_ONE_SYS_MSG_RS) MutateFansId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(6, n)
}

func (rcv *T_CLIENT_OFFCIAL_SEND_ONE_SYS_MSG_RS) SMsg(obj *S_MSG) *S_MSG {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		x := rcv._tab.Indirect(o + rcv._tab.Pos)
		if obj == nil {
			obj = new(S_MSG)
		}
		obj.Init(rcv._tab.Bytes, x)
		return obj
	}
	return nil
}

func T_CLIENT_OFFCIAL_SEND_ONE_SYS_MSG_RSStart(builder *flatbuffers.Builder) {
	builder.StartObject(3)
}
func T_CLIENT_OFFCIAL_SEND_ONE_SYS_MSG_RSAddSRsHead(builder *flatbuffers.Builder, sRsHead flatbuffers.UOffsetT) {
	builder.PrependStructSlot(0, flatbuffers.UOffsetT(sRsHead), 0)
}
func T_CLIENT_OFFCIAL_SEND_ONE_SYS_MSG_RSAddFansId(builder *flatbuffers.Builder, fansId uint64) {
	builder.PrependUint64Slot(1, fansId, 0)
}
func T_CLIENT_OFFCIAL_SEND_ONE_SYS_MSG_RSAddSMsg(builder *flatbuffers.Builder, sMsg flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(2, flatbuffers.UOffsetT(sMsg), 0)
}
func T_CLIENT_OFFCIAL_SEND_ONE_SYS_MSG_RSEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}