// automatically generated by the FlatBuffers compiler, do not modify

package userpack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_GET_ME_INFO_RS struct {
	_tab flatbuffers.Table
}

func GetRootAsT_GET_ME_INFO_RS(buf []byte, offset flatbuffers.UOffsetT) *T_GET_ME_INFO_RS {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_GET_ME_INFO_RS{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_GET_ME_INFO_RS) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_GET_ME_INFO_RS) SRsHead(obj *S_RS_HEAD) *S_RS_HEAD {
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

func (rcv *T_GET_ME_INFO_RS) Token() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *T_GET_ME_INFO_RS) Verification() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *T_GET_ME_INFO_RS) UserId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_GET_ME_INFO_RS) MutateUserId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(10, n)
}

func (rcv *T_GET_ME_INFO_RS) UserName() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(12))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *T_GET_ME_INFO_RS) Birthday() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(14))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_GET_ME_INFO_RS) MutateBirthday(n uint64) bool {
	return rcv._tab.MutateUint64Slot(14, n)
}

func (rcv *T_GET_ME_INFO_RS) City() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(16))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *T_GET_ME_INFO_RS) Province() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(18))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *T_GET_ME_INFO_RS) Signature() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(20))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *T_GET_ME_INFO_RS) Mobile() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(22))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_GET_ME_INFO_RS) MutateMobile(n uint64) bool {
	return rcv._tab.MutateUint64Slot(22, n)
}

func (rcv *T_GET_ME_INFO_RS) NickName() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(24))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *T_GET_ME_INFO_RS) Sex() int8 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(26))
	if o != 0 {
		return rcv._tab.GetInt8(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_GET_ME_INFO_RS) MutateSex(n int8) bool {
	return rcv._tab.MutateInt8Slot(26, n)
}

func (rcv *T_GET_ME_INFO_RS) Mail() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(28))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func T_GET_ME_INFO_RSStart(builder *flatbuffers.Builder) {
	builder.StartObject(13)
}
func T_GET_ME_INFO_RSAddSRsHead(builder *flatbuffers.Builder, sRsHead flatbuffers.UOffsetT) {
	builder.PrependStructSlot(0, flatbuffers.UOffsetT(sRsHead), 0)
}
func T_GET_ME_INFO_RSAddToken(builder *flatbuffers.Builder, token flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(1, flatbuffers.UOffsetT(token), 0)
}
func T_GET_ME_INFO_RSAddVerification(builder *flatbuffers.Builder, verification flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(2, flatbuffers.UOffsetT(verification), 0)
}
func T_GET_ME_INFO_RSAddUserId(builder *flatbuffers.Builder, userId uint64) {
	builder.PrependUint64Slot(3, userId, 0)
}
func T_GET_ME_INFO_RSAddUserName(builder *flatbuffers.Builder, userName flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(4, flatbuffers.UOffsetT(userName), 0)
}
func T_GET_ME_INFO_RSAddBirthday(builder *flatbuffers.Builder, birthday uint64) {
	builder.PrependUint64Slot(5, birthday, 0)
}
func T_GET_ME_INFO_RSAddCity(builder *flatbuffers.Builder, city flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(6, flatbuffers.UOffsetT(city), 0)
}
func T_GET_ME_INFO_RSAddProvince(builder *flatbuffers.Builder, province flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(7, flatbuffers.UOffsetT(province), 0)
}
func T_GET_ME_INFO_RSAddSignature(builder *flatbuffers.Builder, signature flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(8, flatbuffers.UOffsetT(signature), 0)
}
func T_GET_ME_INFO_RSAddMobile(builder *flatbuffers.Builder, mobile uint64) {
	builder.PrependUint64Slot(9, mobile, 0)
}
func T_GET_ME_INFO_RSAddNickName(builder *flatbuffers.Builder, nickName flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(10, flatbuffers.UOffsetT(nickName), 0)
}
func T_GET_ME_INFO_RSAddSex(builder *flatbuffers.Builder, sex int8) {
	builder.PrependInt8Slot(11, sex, 0)
}
func T_GET_ME_INFO_RSAddMail(builder *flatbuffers.Builder, mail flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(12, flatbuffers.UOffsetT(mail), 0)
}
func T_GET_ME_INFO_RSEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
