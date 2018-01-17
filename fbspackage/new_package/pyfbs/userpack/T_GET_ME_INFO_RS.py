# automatically generated by the FlatBuffers compiler, do not modify

# namespace: userpack

import flatbuffers

class T_GET_ME_INFO_RS(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsT_GET_ME_INFO_RS(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = T_GET_ME_INFO_RS()
        x.Init(buf, n + offset)
        return x

    # T_GET_ME_INFO_RS
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # T_GET_ME_INFO_RS
    def SRsHead(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = o + self._tab.Pos
            from .S_RS_HEAD import S_RS_HEAD
            obj = S_RS_HEAD()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_GET_ME_INFO_RS
    def Token(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

    # T_GET_ME_INFO_RS
    def Verification(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

    # T_GET_ME_INFO_RS
    def UserId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_GET_ME_INFO_RS
    def UserName(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(12))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

    # T_GET_ME_INFO_RS
    def Birthday(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(14))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_GET_ME_INFO_RS
    def City(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(16))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

    # T_GET_ME_INFO_RS
    def Province(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(18))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

    # T_GET_ME_INFO_RS
    def Signature(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(20))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

    # T_GET_ME_INFO_RS
    def Mobile(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(22))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_GET_ME_INFO_RS
    def NickName(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(24))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

    # T_GET_ME_INFO_RS
    def Sex(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(26))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int8Flags, o + self._tab.Pos)
        return 0

    # T_GET_ME_INFO_RS
    def Mail(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(28))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

def T_GET_ME_INFO_RSStart(builder): builder.StartObject(13)
def T_GET_ME_INFO_RSAddSRsHead(builder, sRsHead): builder.PrependStructSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(sRsHead), 0)
def T_GET_ME_INFO_RSAddToken(builder, token): builder.PrependUOffsetTRelativeSlot(1, flatbuffers.number_types.UOffsetTFlags.py_type(token), 0)
def T_GET_ME_INFO_RSAddVerification(builder, verification): builder.PrependUOffsetTRelativeSlot(2, flatbuffers.number_types.UOffsetTFlags.py_type(verification), 0)
def T_GET_ME_INFO_RSAddUserId(builder, userId): builder.PrependUint64Slot(3, userId, 0)
def T_GET_ME_INFO_RSAddUserName(builder, userName): builder.PrependUOffsetTRelativeSlot(4, flatbuffers.number_types.UOffsetTFlags.py_type(userName), 0)
def T_GET_ME_INFO_RSAddBirthday(builder, birthday): builder.PrependUint64Slot(5, birthday, 0)
def T_GET_ME_INFO_RSAddCity(builder, city): builder.PrependUOffsetTRelativeSlot(6, flatbuffers.number_types.UOffsetTFlags.py_type(city), 0)
def T_GET_ME_INFO_RSAddProvince(builder, province): builder.PrependUOffsetTRelativeSlot(7, flatbuffers.number_types.UOffsetTFlags.py_type(province), 0)
def T_GET_ME_INFO_RSAddSignature(builder, signature): builder.PrependUOffsetTRelativeSlot(8, flatbuffers.number_types.UOffsetTFlags.py_type(signature), 0)
def T_GET_ME_INFO_RSAddMobile(builder, mobile): builder.PrependUint64Slot(9, mobile, 0)
def T_GET_ME_INFO_RSAddNickName(builder, nickName): builder.PrependUOffsetTRelativeSlot(10, flatbuffers.number_types.UOffsetTFlags.py_type(nickName), 0)
def T_GET_ME_INFO_RSAddSex(builder, sex): builder.PrependInt8Slot(11, sex, 0)
def T_GET_ME_INFO_RSAddMail(builder, mail): builder.PrependUOffsetTRelativeSlot(12, flatbuffers.number_types.UOffsetTFlags.py_type(mail), 0)
def T_GET_ME_INFO_RSEnd(builder): return builder.EndObject()
