# automatically generated by the FlatBuffers compiler, do not modify

# namespace: friendpack

import flatbuffers

class T_FRIEND_REMARK_RQ(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsT_FRIEND_REMARK_RQ(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = T_FRIEND_REMARK_RQ()
        x.Init(buf, n + offset)
        return x

    # T_FRIEND_REMARK_RQ
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # T_FRIEND_REMARK_RQ
    def SRqHead(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = o + self._tab.Pos
            from .S_RQ_HEAD import S_RQ_HEAD
            obj = S_RQ_HEAD()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_FRIEND_REMARK_RQ
    def PeerUserId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_FRIEND_REMARK_RQ
    def PeerRemarkName(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

def T_FRIEND_REMARK_RQStart(builder): builder.StartObject(3)
def T_FRIEND_REMARK_RQAddSRqHead(builder, sRqHead): builder.PrependStructSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(sRqHead), 0)
def T_FRIEND_REMARK_RQAddPeerUserId(builder, peerUserId): builder.PrependUint64Slot(1, peerUserId, 0)
def T_FRIEND_REMARK_RQAddPeerRemarkName(builder, peerRemarkName): builder.PrependUOffsetTRelativeSlot(2, flatbuffers.number_types.UOffsetTFlags.py_type(peerRemarkName), 0)
def T_FRIEND_REMARK_RQEnd(builder): return builder.EndObject()
