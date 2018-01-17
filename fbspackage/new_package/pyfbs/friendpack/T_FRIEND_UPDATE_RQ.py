# automatically generated by the FlatBuffers compiler, do not modify

# namespace: friendpack

import flatbuffers

class T_FRIEND_UPDATE_RQ(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsT_FRIEND_UPDATE_RQ(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = T_FRIEND_UPDATE_RQ()
        x.Init(buf, n + offset)
        return x

    # T_FRIEND_UPDATE_RQ
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # T_FRIEND_UPDATE_RQ
    def SRqHead(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = o + self._tab.Pos
            from .S_RQ_HEAD import S_RQ_HEAD
            obj = S_RQ_HEAD()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_FRIEND_UPDATE_RQ
    def PeerUserId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

def T_FRIEND_UPDATE_RQStart(builder): builder.StartObject(2)
def T_FRIEND_UPDATE_RQAddSRqHead(builder, sRqHead): builder.PrependStructSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(sRqHead), 0)
def T_FRIEND_UPDATE_RQAddPeerUserId(builder, peerUserId): builder.PrependUint64Slot(1, peerUserId, 0)
def T_FRIEND_UPDATE_RQEnd(builder): return builder.EndObject()