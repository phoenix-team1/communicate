// automatically generated by the FlatBuffers compiler, do not modify

package syspack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_LOGIN_RQ struct {
	_tab flatbuffers.Table
}

func GetRootAsT_LOGIN_RQ(buf []byte, offset flatbuffers.UOffsetT) *T_LOGIN_RQ {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_LOGIN_RQ{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_LOGIN_RQ) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_LOGIN_RQ) SRqHead(obj *S_RQ_HEAD) *S_RQ_HEAD {
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

func (rcv *T_LOGIN_RQ) ApId() int32 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.GetInt32(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_LOGIN_RQ) MutateApId(n int32) bool {
	return rcv._tab.MutateInt32Slot(6, n)
}

func (rcv *T_LOGIN_RQ) ClientTime() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_LOGIN_RQ) MutateClientTime(n uint64) bool {
	return rcv._tab.MutateUint64Slot(8, n)
}

func (rcv *T_LOGIN_RQ) Cookie(j int) byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		a := rcv._tab.Vector(o)
		return rcv._tab.GetByte(a + flatbuffers.UOffsetT(j*1))
	}
	return 0
}

func (rcv *T_LOGIN_RQ) CookieLength() int {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		return rcv._tab.VectorLen(o)
	}
	return 0
}

func (rcv *T_LOGIN_RQ) CookieBytes() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *T_LOGIN_RQ) Tgt() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(12))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *T_LOGIN_RQ) ClientVersion() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(14))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *T_LOGIN_RQ) Platform() int8 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(16))
	if o != 0 {
		return rcv._tab.GetInt8(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_LOGIN_RQ) MutatePlatform(n int8) bool {
	return rcv._tab.MutateInt8Slot(16, n)
}

func (rcv *T_LOGIN_RQ) DeviceCode() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(18))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *T_LOGIN_RQ) OsType() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(20))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *T_LOGIN_RQ) NetType() int8 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(22))
	if o != 0 {
		return rcv._tab.GetInt8(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_LOGIN_RQ) MutateNetType(n int8) bool {
	return rcv._tab.MutateInt8Slot(22, n)
}

func T_LOGIN_RQStart(builder *flatbuffers.Builder) {
	builder.StartObject(10)
}
func T_LOGIN_RQAddSRqHead(builder *flatbuffers.Builder, sRqHead flatbuffers.UOffsetT) {
	builder.PrependStructSlot(0, flatbuffers.UOffsetT(sRqHead), 0)
}
func T_LOGIN_RQAddApId(builder *flatbuffers.Builder, apId int32) {
	builder.PrependInt32Slot(1, apId, 0)
}
func T_LOGIN_RQAddClientTime(builder *flatbuffers.Builder, clientTime uint64) {
	builder.PrependUint64Slot(2, clientTime, 0)
}
func T_LOGIN_RQAddCookie(builder *flatbuffers.Builder, cookie flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(3, flatbuffers.UOffsetT(cookie), 0)
}
func T_LOGIN_RQStartCookieVector(builder *flatbuffers.Builder, numElems int) flatbuffers.UOffsetT {
	return builder.StartVector(1, numElems, 1)
}
func T_LOGIN_RQAddTgt(builder *flatbuffers.Builder, tgt flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(4, flatbuffers.UOffsetT(tgt), 0)
}
func T_LOGIN_RQAddClientVersion(builder *flatbuffers.Builder, clientVersion flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(5, flatbuffers.UOffsetT(clientVersion), 0)
}
func T_LOGIN_RQAddPlatform(builder *flatbuffers.Builder, platform int8) {
	builder.PrependInt8Slot(6, platform, 0)
}
func T_LOGIN_RQAddDeviceCode(builder *flatbuffers.Builder, deviceCode flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(7, flatbuffers.UOffsetT(deviceCode), 0)
}
func T_LOGIN_RQAddOsType(builder *flatbuffers.Builder, osType flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(8, flatbuffers.UOffsetT(osType), 0)
}
func T_LOGIN_RQAddNetType(builder *flatbuffers.Builder, netType int8) {
	builder.PrependInt8Slot(9, netType, 0)
}
func T_LOGIN_RQEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}