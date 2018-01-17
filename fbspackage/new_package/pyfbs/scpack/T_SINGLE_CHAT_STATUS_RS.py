# automatically generated by the FlatBuffers compiler, do not modify

# namespace: scpack

import flatbuffers

class T_SINGLE_CHAT_STATUS_RS(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsT_SINGLE_CHAT_STATUS_RS(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = T_SINGLE_CHAT_STATUS_RS()
        x.Init(buf, n + offset)
        return x

    # T_SINGLE_CHAT_STATUS_RS
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # T_SINGLE_CHAT_STATUS_RS
    def SRsHead(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = o + self._tab.Pos
            from .S_RS_HEAD import S_RS_HEAD
            obj = S_RS_HEAD()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_SINGLE_CHAT_STATUS_RS
    def OpUserId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_SINGLE_CHAT_STATUS_RS
    def ChatStatus(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int8Flags, o + self._tab.Pos)
        return 0

def T_SINGLE_CHAT_STATUS_RSStart(builder): builder.StartObject(3)
def T_SINGLE_CHAT_STATUS_RSAddSRsHead(builder, sRsHead): builder.PrependStructSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(sRsHead), 0)
def T_SINGLE_CHAT_STATUS_RSAddOpUserId(builder, opUserId): builder.PrependUint64Slot(1, opUserId, 0)
def T_SINGLE_CHAT_STATUS_RSAddChatStatus(builder, chatStatus): builder.PrependInt8Slot(2, chatStatus, 0)
def T_SINGLE_CHAT_STATUS_RSEnd(builder): return builder.EndObject()
