# automatically generated by the FlatBuffers compiler, do not modify

# namespace: userpack

import flatbuffers

class T_UPDATE_USER_INFO_RQ(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsT_UPDATE_USER_INFO_RQ(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = T_UPDATE_USER_INFO_RQ()
        x.Init(buf, n + offset)
        return x

    # T_UPDATE_USER_INFO_RQ
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # T_UPDATE_USER_INFO_RQ
    def SRqHead(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = o + self._tab.Pos
            from .S_RQ_HEAD import S_RQ_HEAD
            obj = S_RQ_HEAD()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_UPDATE_USER_INFO_RQ
    def KeyLstInfo(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            x = self._tab.Vector(o)
            x += flatbuffers.number_types.UOffsetTFlags.py_type(j) * 4
            x = self._tab.Indirect(x)
            from .T_KEYINFO import T_KEYINFO
            obj = T_KEYINFO()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_UPDATE_USER_INFO_RQ
    def KeyLstInfoLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

def T_UPDATE_USER_INFO_RQStart(builder): builder.StartObject(2)
def T_UPDATE_USER_INFO_RQAddSRqHead(builder, sRqHead): builder.PrependStructSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(sRqHead), 0)
def T_UPDATE_USER_INFO_RQAddKeyLstInfo(builder, keyLstInfo): builder.PrependUOffsetTRelativeSlot(1, flatbuffers.number_types.UOffsetTFlags.py_type(keyLstInfo), 0)
def T_UPDATE_USER_INFO_RQStartKeyLstInfoVector(builder, numElems): return builder.StartVector(4, numElems, 4)
def T_UPDATE_USER_INFO_RQEnd(builder): return builder.EndObject()
