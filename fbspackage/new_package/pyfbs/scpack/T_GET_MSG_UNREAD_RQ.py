# automatically generated by the FlatBuffers compiler, do not modify

# namespace: scpack

import flatbuffers

class T_GET_MSG_UNREAD_RQ(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsT_GET_MSG_UNREAD_RQ(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = T_GET_MSG_UNREAD_RQ()
        x.Init(buf, n + offset)
        return x

    # T_GET_MSG_UNREAD_RQ
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # T_GET_MSG_UNREAD_RQ
    def SRqHead(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = o + self._tab.Pos
            from .S_RQ_HEAD import S_RQ_HEAD
            obj = S_RQ_HEAD()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_GET_MSG_UNREAD_RQ
    def ListBId(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            a = self._tab.Vector(o)
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, a + flatbuffers.number_types.UOffsetTFlags.py_type(j * 8))
        return 0

    # T_GET_MSG_UNREAD_RQ
    def ListBIdLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

def T_GET_MSG_UNREAD_RQStart(builder): builder.StartObject(2)
def T_GET_MSG_UNREAD_RQAddSRqHead(builder, sRqHead): builder.PrependStructSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(sRqHead), 0)
def T_GET_MSG_UNREAD_RQAddListBId(builder, listBId): builder.PrependUOffsetTRelativeSlot(1, flatbuffers.number_types.UOffsetTFlags.py_type(listBId), 0)
def T_GET_MSG_UNREAD_RQStartListBIdVector(builder, numElems): return builder.StartVector(8, numElems, 8)
def T_GET_MSG_UNREAD_RQEnd(builder): return builder.EndObject()
