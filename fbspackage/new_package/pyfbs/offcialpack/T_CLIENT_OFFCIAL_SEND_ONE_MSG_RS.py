# automatically generated by the FlatBuffers compiler, do not modify

# namespace: offcialpack

import flatbuffers

class T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsT_CLIENT_OFFCIAL_SEND_ONE_MSG_RS(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS()
        x.Init(buf, n + offset)
        return x

    # T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS
    def SRsHead(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = o + self._tab.Pos
            from .S_RS_HEAD import S_RS_HEAD
            obj = S_RS_HEAD()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS
    def MessageId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS
    def OffcialId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS
    def FansId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS
    def SMsg(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(12))
        if o != 0:
            x = self._tab.Indirect(o + self._tab.Pos)
            from .S_MSG import S_MSG
            obj = S_MSG()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS
    def BId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(14))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS
    def WId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(16))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS
    def CId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(18))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

def T_CLIENT_OFFCIAL_SEND_ONE_MSG_RSStart(builder): builder.StartObject(8)
def T_CLIENT_OFFCIAL_SEND_ONE_MSG_RSAddSRsHead(builder, sRsHead): builder.PrependStructSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(sRsHead), 0)
def T_CLIENT_OFFCIAL_SEND_ONE_MSG_RSAddMessageId(builder, messageId): builder.PrependUint64Slot(1, messageId, 0)
def T_CLIENT_OFFCIAL_SEND_ONE_MSG_RSAddOffcialId(builder, offcialId): builder.PrependUint64Slot(2, offcialId, 0)
def T_CLIENT_OFFCIAL_SEND_ONE_MSG_RSAddFansId(builder, fansId): builder.PrependUint64Slot(3, fansId, 0)
def T_CLIENT_OFFCIAL_SEND_ONE_MSG_RSAddSMsg(builder, sMsg): builder.PrependUOffsetTRelativeSlot(4, flatbuffers.number_types.UOffsetTFlags.py_type(sMsg), 0)
def T_CLIENT_OFFCIAL_SEND_ONE_MSG_RSAddBId(builder, bId): builder.PrependUint64Slot(5, bId, 0)
def T_CLIENT_OFFCIAL_SEND_ONE_MSG_RSAddWId(builder, wId): builder.PrependUint64Slot(6, wId, 0)
def T_CLIENT_OFFCIAL_SEND_ONE_MSG_RSAddCId(builder, cId): builder.PrependUint64Slot(7, cId, 0)
def T_CLIENT_OFFCIAL_SEND_ONE_MSG_RSEnd(builder): return builder.EndObject()
