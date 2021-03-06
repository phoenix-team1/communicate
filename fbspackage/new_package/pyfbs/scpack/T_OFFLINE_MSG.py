# automatically generated by the FlatBuffers compiler, do not modify

# namespace: scpack

import flatbuffers

class T_OFFLINE_MSG(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsT_OFFLINE_MSG(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = T_OFFLINE_MSG()
        x.Init(buf, n + offset)
        return x

    # T_OFFLINE_MSG
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # T_OFFLINE_MSG
    def OpUserId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_OFFLINE_MSG
    def MessageId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_OFFLINE_MSG
    def SMsg(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            x = self._tab.Indirect(o + self._tab.Pos)
            from .S_MSG import S_MSG
            obj = S_MSG()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_OFFLINE_MSG
    def BId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_OFFLINE_MSG
    def WId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(12))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_OFFLINE_MSG
    def CId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(14))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

def T_OFFLINE_MSGStart(builder): builder.StartObject(6)
def T_OFFLINE_MSGAddOpUserId(builder, opUserId): builder.PrependUint64Slot(0, opUserId, 0)
def T_OFFLINE_MSGAddMessageId(builder, messageId): builder.PrependUint64Slot(1, messageId, 0)
def T_OFFLINE_MSGAddSMsg(builder, sMsg): builder.PrependUOffsetTRelativeSlot(2, flatbuffers.number_types.UOffsetTFlags.py_type(sMsg), 0)
def T_OFFLINE_MSGAddBId(builder, bId): builder.PrependUint64Slot(3, bId, 0)
def T_OFFLINE_MSGAddWId(builder, wId): builder.PrependUint64Slot(4, wId, 0)
def T_OFFLINE_MSGAddCId(builder, cId): builder.PrependUint64Slot(5, cId, 0)
def T_OFFLINE_MSGEnd(builder): return builder.EndObject()
