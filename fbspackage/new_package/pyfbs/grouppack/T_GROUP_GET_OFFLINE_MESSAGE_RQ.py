# automatically generated by the FlatBuffers compiler, do not modify

# namespace: grouppack

import flatbuffers

class T_GROUP_GET_OFFLINE_MESSAGE_RQ(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsT_GROUP_GET_OFFLINE_MESSAGE_RQ(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = T_GROUP_GET_OFFLINE_MESSAGE_RQ()
        x.Init(buf, n + offset)
        return x

    # T_GROUP_GET_OFFLINE_MESSAGE_RQ
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # T_GROUP_GET_OFFLINE_MESSAGE_RQ
    def SRqHead(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = o + self._tab.Pos
            from .S_RQ_HEAD import S_RQ_HEAD
            obj = S_RQ_HEAD()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_GROUP_GET_OFFLINE_MESSAGE_RQ
    def ListGroupOfflineMsgRequest(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            x = self._tab.Vector(o)
            x += flatbuffers.number_types.UOffsetTFlags.py_type(j) * 4
            x = self._tab.Indirect(x)
            from .T_GROUP_BASE_REQUEST import T_GROUP_BASE_REQUEST
            obj = T_GROUP_BASE_REQUEST()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_GROUP_GET_OFFLINE_MESSAGE_RQ
    def ListGroupOfflineMsgRequestLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

def T_GROUP_GET_OFFLINE_MESSAGE_RQStart(builder): builder.StartObject(2)
def T_GROUP_GET_OFFLINE_MESSAGE_RQAddSRqHead(builder, sRqHead): builder.PrependStructSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(sRqHead), 0)
def T_GROUP_GET_OFFLINE_MESSAGE_RQAddListGroupOfflineMsgRequest(builder, listGroupOfflineMsgRequest): builder.PrependUOffsetTRelativeSlot(1, flatbuffers.number_types.UOffsetTFlags.py_type(listGroupOfflineMsgRequest), 0)
def T_GROUP_GET_OFFLINE_MESSAGE_RQStartListGroupOfflineMsgRequestVector(builder, numElems): return builder.StartVector(4, numElems, 4)
def T_GROUP_GET_OFFLINE_MESSAGE_RQEnd(builder): return builder.EndObject()
