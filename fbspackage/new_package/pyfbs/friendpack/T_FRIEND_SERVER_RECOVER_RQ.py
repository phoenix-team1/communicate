# automatically generated by the FlatBuffers compiler, do not modify

# namespace: friendpack

import flatbuffers

class T_FRIEND_SERVER_RECOVER_RQ(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsT_FRIEND_SERVER_RECOVER_RQ(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = T_FRIEND_SERVER_RECOVER_RQ()
        x.Init(buf, n + offset)
        return x

    # T_FRIEND_SERVER_RECOVER_RQ
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # T_FRIEND_SERVER_RECOVER_RQ
    def SRqHead(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = o + self._tab.Pos
            from .S_RQ_HEAD import S_RQ_HEAD
            obj = S_RQ_HEAD()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_FRIEND_SERVER_RECOVER_RQ
    def PeerNickname(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

    # T_FRIEND_SERVER_RECOVER_RQ
    def PeerUserId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_FRIEND_SERVER_RECOVER_RQ
    def Token(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

def T_FRIEND_SERVER_RECOVER_RQStart(builder): builder.StartObject(4)
def T_FRIEND_SERVER_RECOVER_RQAddSRqHead(builder, sRqHead): builder.PrependStructSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(sRqHead), 0)
def T_FRIEND_SERVER_RECOVER_RQAddPeerNickname(builder, peerNickname): builder.PrependUOffsetTRelativeSlot(1, flatbuffers.number_types.UOffsetTFlags.py_type(peerNickname), 0)
def T_FRIEND_SERVER_RECOVER_RQAddPeerUserId(builder, peerUserId): builder.PrependUint64Slot(2, peerUserId, 0)
def T_FRIEND_SERVER_RECOVER_RQAddToken(builder, token): builder.PrependUint64Slot(3, token, 0)
def T_FRIEND_SERVER_RECOVER_RQEnd(builder): return builder.EndObject()