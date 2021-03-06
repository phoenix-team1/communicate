# automatically generated by the FlatBuffers compiler, do not modify

# namespace: friendpack

import flatbuffers

class T_FRIEND_CLIENT_CONFIRM_RQ(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsT_FRIEND_CLIENT_CONFIRM_RQ(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = T_FRIEND_CLIENT_CONFIRM_RQ()
        x.Init(buf, n + offset)
        return x

    # T_FRIEND_CLIENT_CONFIRM_RQ
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # T_FRIEND_CLIENT_CONFIRM_RQ
    def SRqHead(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = o + self._tab.Pos
            from .S_RQ_HEAD import S_RQ_HEAD
            obj = S_RQ_HEAD()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_FRIEND_CLIENT_CONFIRM_RQ
    def OwnNickname(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

    # T_FRIEND_CLIENT_CONFIRM_RQ
    def PeerUserId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_FRIEND_CLIENT_CONFIRM_RQ
    def SourceType(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int8Flags, o + self._tab.Pos)
        return 0

    # T_FRIEND_CLIENT_CONFIRM_RQ
    def PeerRemark(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(12))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

    # T_FRIEND_CLIENT_CONFIRM_RQ
    def Token(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(14))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_FRIEND_CLIENT_CONFIRM_RQ
    def Result(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(16))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int32Flags, o + self._tab.Pos)
        return 0

def T_FRIEND_CLIENT_CONFIRM_RQStart(builder): builder.StartObject(7)
def T_FRIEND_CLIENT_CONFIRM_RQAddSRqHead(builder, sRqHead): builder.PrependStructSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(sRqHead), 0)
def T_FRIEND_CLIENT_CONFIRM_RQAddOwnNickname(builder, ownNickname): builder.PrependUOffsetTRelativeSlot(1, flatbuffers.number_types.UOffsetTFlags.py_type(ownNickname), 0)
def T_FRIEND_CLIENT_CONFIRM_RQAddPeerUserId(builder, peerUserId): builder.PrependUint64Slot(2, peerUserId, 0)
def T_FRIEND_CLIENT_CONFIRM_RQAddSourceType(builder, sourceType): builder.PrependInt8Slot(3, sourceType, 0)
def T_FRIEND_CLIENT_CONFIRM_RQAddPeerRemark(builder, peerRemark): builder.PrependUOffsetTRelativeSlot(4, flatbuffers.number_types.UOffsetTFlags.py_type(peerRemark), 0)
def T_FRIEND_CLIENT_CONFIRM_RQAddToken(builder, token): builder.PrependUint64Slot(5, token, 0)
def T_FRIEND_CLIENT_CONFIRM_RQAddResult(builder, result): builder.PrependInt32Slot(6, result, 0)
def T_FRIEND_CLIENT_CONFIRM_RQEnd(builder): return builder.EndObject()
