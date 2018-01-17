# automatically generated by the FlatBuffers compiler, do not modify

# namespace: scpack

import flatbuffers

class T_SINGLE_CHAT_STATUS_RQ(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsT_SINGLE_CHAT_STATUS_RQ(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = T_SINGLE_CHAT_STATUS_RQ()
        x.Init(buf, n + offset)
        return x

    # T_SINGLE_CHAT_STATUS_RQ
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # T_SINGLE_CHAT_STATUS_RQ
    def SRqHead(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = o + self._tab.Pos
            from .S_RQ_HEAD import S_RQ_HEAD
            obj = S_RQ_HEAD()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_SINGLE_CHAT_STATUS_RQ
    def OpUserId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_SINGLE_CHAT_STATUS_RQ
    def ChatStatus(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int8Flags, o + self._tab.Pos)
        return 0

def T_SINGLE_CHAT_STATUS_RQStart(builder): builder.StartObject(3)
def T_SINGLE_CHAT_STATUS_RQAddSRqHead(builder, sRqHead): builder.PrependStructSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(sRqHead), 0)
def T_SINGLE_CHAT_STATUS_RQAddOpUserId(builder, opUserId): builder.PrependUint64Slot(1, opUserId, 0)
def T_SINGLE_CHAT_STATUS_RQAddChatStatus(builder, chatStatus): builder.PrependInt8Slot(2, chatStatus, 0)
def T_SINGLE_CHAT_STATUS_RQEnd(builder): return builder.EndObject()